import React, { useState } from "react";
import { useGetCharacterByIdQuery } from "../apis/rickAndMortyApi";

const CharacterDetail: React.FC = () => {
  const [characterId, setCharacterId] = useState(1);
  const {
    data: character,
    error,
    isLoading,
  } = useGetCharacterByIdQuery(characterId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterId(Number(e.target.value));
  };

  if (isLoading) return <p>Loading character...</p>;
  if (error) return <p>An error occurred while fetching character.</p>;

  return (
    <div>
      <h2>Character Detail</h2>
      <input
        type="number"
        min="1"
        max="826" // Total number of characters in the API
        value={characterId}
        onChange={handleInputChange}
      />
      {character && (
        <div style={{ marginTop: "1rem" }}>
          <img src={character.image} alt={character.name} width={200} />
          <h3>{character.name}</h3>
          <p>
            {character.species} - {character.status}
          </p>
          <p>Gender: {character.gender}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
