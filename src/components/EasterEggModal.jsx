import { useEffect, useState } from 'react';

export const EasterEggModal = ({ isOpen, onClose }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchCharacter = async () => {
      try {
        const res = await fetch(
          'https://rickandmortyapi.com/api/character/' +
            Math.floor(Math.random() * 826 + 1)
        );
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        console.error('Error fetching Rick & Morty character:', err);
      }
    };

    fetchCharacter();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-card rounded-lg shadow-lg p-6 max-w-sm w-full text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-sm bg-primary text-white px-2 py-1 rounded hover:bg-primary/80"
        >
          Close
        </button>

        {character ? (
          <>
            <img
              src={character.image}
              alt={character.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{character.name}</h3>
            <p className="text-sm text-muted-foreground">
              {character.species} — {character.status}
            </p>
          </>
        ) : (
          <p className="text-muted-foreground">Loading...</p>
        )}
      </div>
    </div>
  );
};
