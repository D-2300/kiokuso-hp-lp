interface TextureBandProps {
  src: string;
  height?: number;
}

export default function TextureBand({ src, height = 180 }: TextureBandProps) {
  return (
    <div
      style={{
        height: `${height}px`,
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
