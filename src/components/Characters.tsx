import React from "react";
import { useGetCharactersQuery } from "../apis/rickAndMortyApi";

const Characters: React.FC = () => {
  const { data: characters, error, isLoading } = useGetCharactersQuery();

  if (isLoading) return <p>Loading characters...</p>;
  if (error) return <p>An error occurred while fetching characters.</p>;

  return (
    <div>
      <h2>Characters</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters?.results.map((character) => (
          <div
            key={character.id}
            style={{ margin: "1rem", textAlign: "center" }}
          >
            <img src={character.image} alt={character.name} width={150} />
            <h3>{character.name}</h3>
            <p>
              {character.species} - {character.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
