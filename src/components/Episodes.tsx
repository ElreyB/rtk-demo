import React from "react";
import { useGetEpisodesQuery } from "../apis/rickAndMortyApi";

const Episodes: React.FC = () => {
  const { data, error, isLoading } = useGetEpisodesQuery();

  if (isLoading) return <p>Loading episodes...</p>;
  if (error) return <p>An error occurred while fetching episodes.</p>;

  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {data?.results.map((episode) => (
          <li key={episode.id}>
            <strong>{episode.episode}:</strong> {episode.name} (Air date:{" "}
            {episode.air_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
