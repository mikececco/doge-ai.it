"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.getElementById("article-body");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleHeight = article.offsetHeight;
      const scrolled = -rect.top;
      const total = articleHeight - window.innerHeight;
      const pct = Math.min(Math.max((scrolled / total) * 100, 0), 100);
      setProgress(pct);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-grigio-chiaro">
      <div
        className="h-full bg-giallo transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
