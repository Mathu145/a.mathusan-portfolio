import { useEffect } from "react";
import { useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    // Dark Mode observer
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDarkMode(dark);
      generateMeteors(dark); // Meteoren neu erzeugen mit richtiger Farbe
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    const dark = document.documentElement.classList.contains("dark");
    setIsDarkMode(dark);
    generateMeteors(dark);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = (darkMode) => {
    const numberOfMeteors = 8;
    const newMeteors = [];

    const darkColors = ["#8e2188", "#4e2188", "#0e2188"];
    const lightColors = ["#ffc100", "#ff7400", "#ff0000"];
    const colors = darkMode ? darkColors : lightColors;

    for (let i = 0; i < numberOfMeteors; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];

      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
        color: color,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            backgroundColor: isDarkMode ? "#ffffff" : "#ff8000",
            position: "absolute",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            backgroundImage: `linear-gradient(to bottom, white, ${meteor.color})`,
            position: "absolute",
            borderRadius: "999px",
          }}
        />
      ))}
    </div>
  );
};
