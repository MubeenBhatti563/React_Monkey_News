import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} NewsMonkey. All rights reserved.</span>
        <span>Built by Mubeen</span>
      </div>
    </footer>
  );
}
