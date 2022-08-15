import type { NextPage } from "next";

import { Pokemon } from "../src/types";
import PokemonList from "../components/PokemonList";
import Login from "../components/Login";
import pokemon from "./pokemon.json";

export function getStaticProps() {
  return {
    props: {
      pokemon,
    },
  };
}

const Home: NextPage<{
  pokemon: Pokemon[];
}> = ({ pokemon }: { pokemon: Pokemon[] }) => {
  return (
    <div>
      <Login />
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default Home;
