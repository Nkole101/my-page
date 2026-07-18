interface ProjectPreviewIconProps {
  src: string;
  alt: string;
  variant?: "app" | "folder";
}

export function ProjectPreviewIcon({ src, alt, variant = "app" }: ProjectPreviewIconProps) {
  if (variant === "folder") {
    return (
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_58%]"
        draggable={false}
      />
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.16),transparent_62%)]" />
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain object-center p-10 drop-shadow-[0_24px_48px_rgba(34,197,94,0.28)] md:p-14"
        draggable={false}
      />
    </>
  );
}
