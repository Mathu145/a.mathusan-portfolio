import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed bottom-22 left-4 z-50 p-3 rounded-full shadow-md hover:scale-105 transition-all focus:outline-none',
        isDarkMode ? 'bg-white' : 'bg-gray-900'
      )}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-[#6f00ff]" />
      ) : (
        <Moon className="h-6 w-6 text-[#ff0000]" />
      )}
    </button>
  );
};
