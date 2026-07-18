interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

export function VideoBackground({ src, poster }: VideoBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="h-full w-full scale-105 object-cover opacity-35"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
      <div className="absolute inset-0 bg-bg/30" />
    </div>
  );
}
