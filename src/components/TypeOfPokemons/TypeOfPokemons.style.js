import styled from "styled-components";
import { Link } from "react-router-dom";

export const TypeOfPokemonsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 1rem;
  padding: 2rem;
`;
export const PokeCards = styled.div`
  height: 5rem;
  background: rgba(150, 191, 200, 0.7);
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? "3px solid red" : "none")};

  &:hover {
    cursor: pointer;
    box-shadow: 0.5rem 0.5rem 0.3rem rgba(27, 117, 123, 0.4);
    transform: translateY(-0.3em);
    background-color: rgb(87, 204, 153);
    border: 2px solid white;
  }
`;

export const PokeLabel = styled(Link)`
  margin: 1rem;
  font-weight: bolder;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-decoration-line: none;
  color: rgba(32, 75, 87);
  background: transparent;
`;
