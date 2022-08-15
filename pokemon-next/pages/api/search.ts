import { Pokemon } from "../../src/types";

export default async function handler(req, res) {
  const response = await fetch("http://localhost:8080/pokemon.json");
  const pokemon = (await response.json()) as Pokemon[];

  const q = (req.query?.q as string)?.toLowerCase() ?? "";

  res
    .status(200)
    .json(pokemon.filter((p: Pokemon) => p.name.toLowerCase().includes(q)));
}
