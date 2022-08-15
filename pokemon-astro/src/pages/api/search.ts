import { Pokemon } from "../../types";

export async function get({ request }) {
  const response = await fetch("http://localhost:8080/pokemon.json");
  const pokemon = (await response.json()) as Pokemon[];

  const req = request[Object.getOwnPropertySymbols(request)[1]];
  const q = req.parsedURL.searchParams.get("q")?.toLowerCase() ?? "";

  return new Response(
    JSON.stringify(
      pokemon.filter((p: Pokemon) => p.name.toLowerCase().includes(q))
    ),
    {
      status: 200,
    }
  );
}
