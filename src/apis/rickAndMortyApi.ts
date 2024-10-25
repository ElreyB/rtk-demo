import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<{ results: Character[] }, number | void>({
      query: (page = 1) => `character/?page=${page}`,
    }),
    getEpisodes: builder.query<{ results: Episode[] }, number | void>({
      query: (page = 1) => `episode/?page=${page}`,
    }),
    getLocations: builder.query<{ results: Location[] }, number | void>({
      query: (page = 1) => `location/?page=${page}`,
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetEpisodesQuery,
  useGetLocationsQuery,
  useGetCharacterByIdQuery,
} = rickAndMortyApi;
