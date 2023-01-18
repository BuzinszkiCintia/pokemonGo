import { PokeCards, PokeLabel } from "./TypeOfPokemons.style";

interface Props {
  poke: {
    name: string;
  };
  index: number;
  border: boolean;
}
const TypeOfPokemonCard = ({ poke, index, border }: Props) => {
  return (
    <div>
      <PokeCards key={index} border={border}>
        <PokeLabel key={index} to={`/pokemongo/${poke.name}`}>
          {poke.name}
        </PokeLabel>
      </PokeCards>
    </div>
  );
};

export default TypeOfPokemonCard;
