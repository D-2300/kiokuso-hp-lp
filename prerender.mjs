import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  "/",
  "/lp",
  "/about",
  "/studio",
  "/studio/about",
  "/studio/works",
  "/studio/pricing",
  "/privacy",
  "/koumuten",
  "/reform",
  "/fudousan",
  "/manshitsu",
];

async function prerender() {
  const templatePath = path.join(__dirname, "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { render } = await import("./dist-server/entry-server.js");

  for (const route of ROUTES) {
    const appHtml = render(route);

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const filePath =
      route === "/"
        ? path.join(__dirname, "dist", "index.html")
        : path.join(__dirname, "dist", route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`Prerendered: ${route} → ${path.relative(__dirname, filePath)}`);
  }

  fs.rmSync(path.join(__dirname, "dist-server"), { recursive: true, force: true });

  console.log("\nPrerender complete!");
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
