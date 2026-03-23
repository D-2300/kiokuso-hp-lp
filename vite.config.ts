import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function skipBrokenFiles(): import('vite').Plugin {
  return {
    name: 'skip-broken-public-files',
    buildStart() {
      const imagesDir = path.resolve(__dirname, 'public/images');
      if (!fs.existsSync(imagesDir)) return;
      const entries = fs.readdirSync(imagesDir);
      for (const entry of entries) {
        if (entry.includes(' copy')) {
          const fullPath = path.join(imagesDir, entry);
          try {
            fs.accessSync(fullPath, fs.constants.R_OK);
          } catch {
            try { fs.unlinkSync(fullPath); } catch {}
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), skipBrokenFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    noExternal: ['lucide-react'],
  },
});
