interface ImageBackgroundProps {
  src: string;
}

export function ImageBackground({ src }: ImageBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img src={src} alt="" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-bg/45 to-bg/90" />
      <div className="absolute inset-0 bg-bg/20" />
    </div>
  );
}
