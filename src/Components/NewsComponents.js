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
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.React_App_NewsMonkey}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      setProgress(45);
      const data = await response.json();
      if (data.status !== "ok") {
        throw new Error(data.message || "Could not load headlines.");
      }
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (err) {
      setError(err.message || "Something went wrong while fetching the news.");
    } finally {
      setProgress(100);
      setLoading(false);
    }
  }, [country, category, page, pageSize, setProgress]);

  // Reset to page 1 and update the tab title whenever the category changes
  useEffect(() => {
    document.title = `${capitalize(category)} - NewsMonkey`;
    setPage(1);
  }, [category]);

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category, country, pageSize]);

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
          <button type="button" onClick={fetchNews} className="btn-ghost">
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
      ) : error ? null : articles.length === 0 ? (
        <div className="news-empty">
          No headlines found for this category right now.
        </div>
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
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="btn-ghost"
            >
              ← Previous
            </button>
            <span className="news-pagination-status">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="btn-ghost"
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
