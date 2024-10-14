// import Counter from "./counter";

export default async function Home() {
  const pokemon = (await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  )) as { results: { name: string }[] };

  // return (
  //   <main>
  //     <h1>Counter Test</h1>
  //     <Counter />
  //   </main>
  // );

  return (
    <div className="bg-black p-5 text-white">
      <h1>Pokemon</h1>
      <ul>
        {pokemon.results.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
