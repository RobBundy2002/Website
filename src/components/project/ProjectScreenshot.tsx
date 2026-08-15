interface ProjectScreenshotProps {
  src?: string;
  alt: string;
  caption: string;
}

export function ProjectScreenshot({ src, alt, caption }: ProjectScreenshotProps) {
  return (
    <figure className="project-screenshot">
      {src ? <img src={src} alt={alt} loading="lazy" /> : <div className="media-placeholder">Screenshot pending</div>}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
