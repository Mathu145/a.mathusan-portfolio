// src/components/QuoteWidget.jsx
import { useEffect, useState } from "react";

export const QuoteWidget = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async (signal) => {
    try {
      const res = await fetch("https://zenquotes.io/api/random", { signal });
      const data = await res.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (err) {
      if (err.name !== "AbortError") console.error("Quote fetch failed", err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchQuote(controller.signal);

    const intervalId = setInterval(() => fetchQuote(controller.signal), 60000);

    return () => {
      controller.abort();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <figure className="text-muted-foreground mt-2 text-base italic">
      <blockquote className="opacity-0 animate-fade-in-delay-4">“{quote}”</blockquote>
      <figcaption className="mt-1 text-sm text-right">— {author}</figcaption>
    </figure>
  );
};
