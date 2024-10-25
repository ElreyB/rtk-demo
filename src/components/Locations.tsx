import React from "react";
import { useGetLocationsQuery } from "../apis/rickAndMortyApi";

const Locations: React.FC = () => {
  const { data: locations, error, isLoading } = useGetLocationsQuery();

  if (isLoading) return <p>Loading locations...</p>;
  if (error) return <p>An error occurred while fetching locations.</p>;

  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations?.results.map((location) => (
          <li key={location.id}>
            <strong>{location.name}</strong> - {location.type} in{" "}
            {location.dimension}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
