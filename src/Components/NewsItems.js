import React from "react";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=800&auto=format&fit=crop",
];

function pickFallbackImage(seed = "") {
  const index = seed.length % FALLBACK_IMAGES.length;
  return FALLBACK_IMAGES[index];
}

function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsItems({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  featured = false,
}) {
  const safeTitle = title || "Untitled story";
  const safeImage = imageUrl || pickFallbackImage(safeTitle);

  return (
    <article className={`news-card${featured ? " news-card--featured" : ""}`}>
      <a
        href={newsUrl}
        target="_blank"
        rel="noreferrer"
        className="news-card-media"
      >
        <img src={safeImage} alt={safeTitle} loading="lazy" />
      </a>
      <div className="news-card-body">
        {featured && <span className="news-card-eyebrow">Top story</span>}
        <h3 className="news-card-title">{safeTitle}</h3>
        {description && <p className="news-card-desc">{description}</p>}
        <div className="news-card-meta">
          <span>{author || "Unknown author"}</span>
          <span className="dot" aria-hidden="true">
            •
          </span>
          <span>{formatDate(date)}</span>
        </div>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="news-card-link"
        >
          Read full story <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
