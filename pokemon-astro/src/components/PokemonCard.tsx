import React from "react";

import { Pokemon } from "../types";

const PokemonCard: React.FunctionComponent<{
  pokemon: Pokemon;
}> = ({ pokemon }) => {
  return (
    <div className="w-full flex border border-gray-200 rounded-md shadow-lg">
      <div
        className="m-2 h-48 lg:h-auto lg:w-24 flex-none bg-contain bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url("http://localhost:8080/pokemon/${pokemon.name.toLowerCase()}.jpg")`,
        }}
        title={pokemon.name}
      ></div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {pokemon.name}
          </div>
          <p className="text-gray-700 text-base italic">
            {pokemon.type.join(", ")}
          </p>
          <div className="grid grid-cols-2">
            <p>HP: {pokemon.hp}</p>
            <p>Speed: {pokemon.speed}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Sp. Attack: {pokemon.special_attack}</p>
            <p>Sp. Defense: {pokemon.special_defense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
