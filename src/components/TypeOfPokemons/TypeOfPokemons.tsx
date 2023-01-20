import Fetch from "../Fetch/Fetch";
import TypeOfPokemonCard from "./TypeOfPokemonCard";
import { TypeOfPokemonsContainer } from "./TypeOfPokemons.style";
import { Loader } from "../Pokemon/Pokemon.style";

interface Props {
  url: string;
  checked: string[];
  search: string;
}

interface Pokemons {
  pokemon: {
    name: string;
    url: string;
  };
}

const TypeOfPokemons = ({ url, checked, search }: Props) => {
  let catchedPokemons = JSON.parse(sessionStorage.getItem("Catched") || "[]");
  const { data, loading } = Fetch(url);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TypeOfPokemonsContainer>
          {data?.pokemon
            .filter((f: any) => {
              if (checked.length > 0 && checked.includes(f.pokemon.name)) {
                return f.pokemon;
              }
              if (search.length > 0 && f.pokemon.name.includes(search)) {
                return f.pokemon;
              }
              if (checked.length <= 0 && search.length <= 0) {
                return f.pokemon;
              }
            })
            .map((pokemon: Pokemons, index: number) => {
              let poke = pokemon.pokemon;
              if (catchedPokemons.includes(poke.name)) {
                return (
                  <TypeOfPokemonCard
                    key={index}
                    poke={poke}
                    index={index}
                    border={true}
                  />
                );
              } else {
                return (
                  <TypeOfPokemonCard
                    key={index}
                    poke={poke}
                    index={index}
                    border={false}
                  />
                );
              }
            })}
        </TypeOfPokemonsContainer>
      )}
    </>
  );
};

export default TypeOfPokemons;
