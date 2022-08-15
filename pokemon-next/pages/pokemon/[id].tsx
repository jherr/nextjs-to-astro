/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextApiRequest } from "next";

import { Pokemon } from "../../src/types";

export async function getServerSideProps(req: NextApiRequest) {
  const response = await fetch("http://localhost:8080/pokemon.json");
  const pokemon = (await response.json()) as Pokemon[];

  return {
    props: {
      pokemon: pokemon.find((p: Pokemon) => p.id === +req.query.id),
    },
  };
}

const Detail: React.FunctionComponent<{
  pokemon: Pokemon;
}> = ({ pokemon }) => {
  return (
    <div className="flex gap-2">
      <div className="max-w-md">
        <img
          src={`http://localhost:8080/pokemon/${pokemon.name.toLowerCase()}.jpg`}
          alt={pokemon.name}
          className="w-full"
        />
      </div>
      <div>
        <h1 className="font-bold text-5xl mb-2">{pokemon.name}</h1>
        <div className="italic text-xl">{pokemon.type.join(", ")}</div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="font-bold mr-4">HP</div>
          <div>{pokemon.hp}</div>
          <div className="font-bold mr-4">Speed</div>
          <div>{pokemon.speed}</div>
          <div className="font-bold mr-4">Attack</div>
          <div>{pokemon.attack}</div>
          <div className="font-bold mr-4">Special Attack</div>
          <div>{pokemon.special_attack}</div>
          <div className="font-bold mr-4">Defense</div>
          <div>{pokemon.defense}</div>
          <div className="font-bold mr-4">Special Defense</div>
          <div>{pokemon.special_defense}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
