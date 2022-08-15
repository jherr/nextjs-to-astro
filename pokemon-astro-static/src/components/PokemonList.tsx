import { useMemo } from "react";

import { Pokemon } from "./types";

const PokemonRow = ({
  pokemon,
  overallRankings,
}: {
  pokemon: Pokemon;
  overallRankings: Pokemon[];
}) => (
  <tr>
    <td width="20%">{pokemon.name}</td>
    <td width="25%">{pokemon.type.join(", ")}</td>
    <td width="5%">{pokemon.hp}</td>
    <td width="5%">{pokemon.attack}</td>
    <td width="5%">{pokemon.defense}</td>
    <td width="5%">{pokemon.speed}</td>
    <td width="5%">{pokemon.special_attack}</td>
    <td width="5%">{pokemon.special_defense}</td>
    <td width="5%">
      #{overallRankings.findIndex((p) => p.name === pokemon.name) + 1}
    </td>
  </tr>
);

const PokemonTable = ({
  pokemon,
  overallRankings,
}: {
  pokemon: Pokemon[];
  overallRankings: Pokemon[];
}) => {
  return (
    <table width="100%">
      <tbody>
        {pokemon.map((p) => (
          <PokemonRow
            key={p.name}
            pokemon={p}
            overallRankings={overallRankings}
          />
        ))}
      </tbody>
    </table>
  );
};

const power = (a: Pokemon) =>
  a.attack + a.defense + a.speed + a.hp + a.special_attack + a.special_defense;

const PokemonList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  const topByType = useMemo(() => {
    const topByType: Record<string, Pokemon[]> = {};
    for (const p of pokemon) {
      for (const t of p.type) {
        if (!topByType[t]) {
          topByType[t] = [];
        }
        topByType[t].push(p);
      }
    }
    return Object.keys(topByType)
      .map((type) => ({
        type,
        pokemon: topByType[type]
          .sort((a, b) => power(b) - power(a))
          .map((p) => ({ ...p })),
      }))
      .sort((a, b) => a.type.localeCompare(b.type));
  }, [pokemon]);

  const overallRankings = useMemo(
    () => pokemon.sort((a, b) => power(b) - power(a)).map((p) => ({ ...p })),
    [pokemon]
  );

  return (
    <div>
      {topByType.map((type) => (
        <div key={type.type}>
          <h2>{type.type}</h2>
          <PokemonTable
            pokemon={type.pokemon.slice(0, 1)}
            overallRankings={overallRankings}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
