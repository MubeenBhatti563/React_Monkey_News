import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import NewsItems from "./NewsItems";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default function NewsComponents({
  country = "us",
  pageSize = 6,
  category = "general",
  setProgress,
}) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    setProgress(10);

    try {
      const baseUrl = "https://react-monkey-news.vercel.app/api/news";

      const url = `${baseUrl}?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`;

      console.log("Fetching:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      setProgress(45);

      const data = await response.json();

      if (data.status !== "ok" || !data.articles) {
        throw new Error(data.message || "Could not load news");
      }

      setArticles(data.articles);
      setTotalResults(data.totalResults || 0);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setProgress(100);
      setLoading(false);
    }
  }, [country, category, page, pageSize, setProgress]);

  useEffect(() => {
    document.title = `${capitalize(category)} - NewsMonkey`;
    setPage(1);
  }, [category]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

  return (
    <div className="news-page">
      <div className="news-page-header">
        <p className="news-page-eyebrow">Today's briefing</p>
        <h1 className="news-page-title">{capitalize(category)} headlines</h1>
      </div>

      {error && (
        <div className="news-error">
          <p>{error}</p>
          <button onClick={fetchNews} className="btn-ghost">
            Try again
          </button>
        </div>
      )}

      {loading ? (
        <div className="news-grid">
          {Array.from({ length: pageSize }).map((_, i) => (
            <div className="news-skeleton" key={i} />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="news-empty">No headlines found.</div>
      ) : (
        <>
          <div className="news-grid">
            {articles.map((article, index) => (
              <NewsItems
                key={article.url}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                featured={page === 1 && index === 0}
              />
            ))}
          </div>

          <div className="news-pagination">
            <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
              ← Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

NewsComponents.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
