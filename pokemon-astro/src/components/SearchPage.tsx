import { useState, useEffect } from "react";

import { Pokemon } from "../types";

import PokemonCard from "./PokemonCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon));
  }, [query]);

  return (
    <>
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 border-2 rounded-md"
        placeholder="Search"
      />
      <div className="mt-3 grid grid-cols-3 gap-5">
        {pokemon.slice(0, 10).map((pokemon) => (
          <a href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard pokemon={pokemon}></PokemonCard>
          </a>
        ))}
      </div>
    </>
  );
}
