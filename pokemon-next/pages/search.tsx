import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

import { Pokemon } from "../src/types";

import PokemonCard from "../components/PokemonCard";

const SearchPage: React.FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon));
  }, [query]);

  const averages = useMemo(
    () => ({
      hp: pokemon.reduce((sum, p) => sum + p.hp, 0) / pokemon.length,
      speed: pokemon.reduce((sum, p) => sum + p.speed, 0) / pokemon.length,
      attack: pokemon.reduce((sum, p) => sum + p.attack, 0) / pokemon.length,
      special_attack:
        pokemon.reduce((sum, p) => sum + p.special_attack, 0) / pokemon.length,
      defense: pokemon.reduce((sum, p) => sum + p.defense, 0) / pokemon.length,
      special_defense:
        pokemon.reduce((sum, p) => sum + p.special_defense, 0) / pokemon.length,
    }),
    [pokemon]
  );

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
      <div className="mt-3 flex">
        <div
          className="grid grid-cols-2 gap-5"
          style={{
            flex: 0.7,
          }}
        >
          {pokemon.slice(0, 10).map((pokemon) => (
            <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <a>
                <PokemonCard pokemon={pokemon} />
              </a>
            </Link>
          ))}
        </div>
        <div
          className="px-5"
          style={{
            flex: 0.3,
          }}
        >
          <h2 className="text-2xl font-bold border-b">Averages</h2>
          <div className="grid grid-cols-2 w-full gap-2 mt-3">
            <div className="font-bold text-xl">HP</div>
            <div className="text-xl">{averages.hp.toFixed(1)}</div>
            <div className="font-bold text-xl">Speed</div>
            <div className="text-xl">{averages.speed.toFixed(1)}</div>
            <div className="font-bold text-xl">Attack</div>
            <div className="text-xl">{averages.attack.toFixed(1)}</div>
            <div className="font-bold text-xl">Special Attack</div>
            <div className="text-xl">{averages.special_attack.toFixed(1)}</div>
            <div className="font-bold text-xl">Defense</div>
            <div className="text-xl">{averages.defense.toFixed(1)}</div>
            <div className="font-bold text-xl">Special Defense</div>
            <div className="text-xl">{averages.special_defense.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
