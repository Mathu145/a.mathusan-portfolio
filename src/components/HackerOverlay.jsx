import { useEffect, useState } from 'react';

export const HackerOverlay = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80); // 8 Sekunden total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      {/* Matrix-like falling code */}
      <div
        className="absolute inset-0 animate-matrix-code opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage:
            'url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGdoYnVzYWw2YjJzcjZqNjNxMGg4bzl4aWJ3d3FqYjN5YjJuM213dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sULKEgDMX8LcI/giphy.gif)',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Message content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-green-400 h-full text-center px-6">
        <pre className="text-sm md:text-base leading-relaxed font-mono whitespace-pre-wrap mb-6">
          {`ACCESS GRANTED...
LOADING SYSTEM FILES...
INJECTING CODE...
ENCRYPTION BYPASSED...
YOU ARE NOW IN THE SYSTEM`}
        </pre>

        {/* Progress bar */}
        <div className="w-full max-w-md bg-green-900 rounded-full h-4 overflow-hidden border border-green-400">
          <div
            className="bg-green-400 h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 font-mono text-xs md:text-sm">
          {progress}% DATA DOWNLOADED
        </p>
      </div>
    </div>
  );
};
