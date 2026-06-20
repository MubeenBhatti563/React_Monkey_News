import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Components/Navbar";
import NewsComponents from "./Components/NewsComponents";
import "./App.css";

const CATEGORIES = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function App() {
  const [progress, setProgress] = useState(0);
  const pageSize = 6;

  return (
    <div className="app-shell">
      <Router>
        <LoadingBar
          height={3}
          color="#e7b465"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <main className="app-main">
          <Routes>
            {CATEGORIES.map((category) => (
              <Route
                key={category}
                path={category === "general" ? "/" : `/${category}`}
                element={
                  <NewsComponents
                    setProgress={setProgress}
                    pageSize={pageSize}
                    country="us"
                    category={category}
                  />
                }
              />
            ))}
          </Routes>
        </main>
      </Router>
    </div>
  );
}
