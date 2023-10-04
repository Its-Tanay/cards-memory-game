import React from 'react';

export default function Game({ random, handleImageClick }) {
  return (
    <div id="card-grid">
      {random.map((character) => (
        <img
          key={character.id}
          src={character.image}
          alt={`img${character.id}`} 
          id={`char${character.id}`}
          onClick={() => handleImageClick(character.id)}
        />
      ))}
    </div>
  );
}
