import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Fetch from "../Fetch/Fetch";
import {
  PokemonCardContainer,
  PokemonCard,
  PokemonImage,
  PokemonIcon,
  PokemonContent,
  CatchButton,
  BackButton,
  Loader,
  MainPokemonContainer,
} from "./Pokemon.style";

interface Abilities {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

const Pokemon = () => {
  const { name } = useParams();

  const { data, loading } = Fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const [buttonLabel, setButtonLabel] = useState("");

  let catchedPokemons = JSON.parse(sessionStorage.getItem("Catched") || "[]");

  useEffect(() => {
    if (catchedPokemons.includes(data?.name)) {
      setButtonLabel("Release");
    } else {
      setButtonLabel("Catch");
    }
  }, [catchedPokemons]);

  const handleClick = () => {
    if (buttonLabel === "Catch") {
      catchedPokemons.push(data.name);
      setButtonLabel("Release");
    } else {
      const index = catchedPokemons.indexOf(data.name);
      catchedPokemons.splice(index, 1);
      setButtonLabel("Catch");
    }

    sessionStorage.setItem("Catched", JSON.stringify(catchedPokemons));
  };

  return (
    <MainPokemonContainer>
      <BackButton key="back" to={"/pokemongo/"}>
        Back
      </BackButton>
      {loading ? (
        <Loader />
      ) : (
        <PokemonCardContainer>
          <PokemonCard>
            <PokemonIcon>
              <PokemonImage
                src={data?.sprites.front_default}
                alt={data?.name}
              />
            </PokemonIcon>
            <PokemonContent>
              <h1>{data?.name}</h1>
              <h3>Weight: {data?.weight}</h3>
              <h3>Height: {data?.height}</h3>
              <div>
                <h3>Not hidden abilities:</h3>
                {data?.abilities.map((abi: Abilities, index: number) => {
                  return abi.is_hidden ? (
                    ""
                  ) : (
                    <h4 key={index}>{abi.ability.name}</h4>
                  );
                })}
              </div>
              <CatchButton onClick={handleClick}>{buttonLabel}</CatchButton>
            </PokemonContent>
          </PokemonCard>
        </PokemonCardContainer>
      )}
    </MainPokemonContainer>
  );
};

export default Pokemon;
