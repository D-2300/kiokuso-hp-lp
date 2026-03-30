interface TextureBandProps {
  src: string;
  height?: number;
}

export default function TextureBand({ src, height = 180 }: TextureBandProps) {
  return (
    <div style={{ padding: "32px 0" }}>
      <div
        style={{
          height: `${height}px`,
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
    </div>
  );
}
