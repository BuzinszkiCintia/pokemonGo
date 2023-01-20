import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(251, 233, 185);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 230, 1) 0%,
    rgba(248, 251, 228, 1) 27%,
    rgba(150, 202, 204, 1) 73%,
    rgba(22, 138, 173, 1) 100%
  );
`;

export const PokemonCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
`;

export const PokemonCard = styled.div`
  position: relative;
  width: 520px;
  height: 450px;
  margin: 30px;
  background-color: #287bff;
  border-radius: 20px;
  border-bottom-left-radius: 160px;
  border-bottom-right-radius: 160px;
  box-shadow: 0 15px 0 #fff, inset 0 -15px 0 rgba(255, 255, 255, 0.25),
    0 45px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: linear-gradient(to bottom, #7bf1a8, #168aad);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &::before {
    content: "";
    position: absolute;
    top: -250px;
    left: -40%;
    width: 100%;
    height: 150%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
    transform: rotate(35deg);
    pointer-events: none;
    filter: blur(5px);
  }
`;

export const PokemonIcon = styled.div`
  position: relative;
  width: 190px;
  height: 150px;
  background-color: rgba(255, 255, 230, 1);
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1), inset 0 -8px 0 #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    width: 60px;
    height: 60px;
    background: transparent;
    border-top-right-radius: 50px;
    box-shadow: 15px -15px 0 15px rgba(255, 255, 230, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -15px -15px 0 15px rgba(255, 255, 230, 1);
  }
`;
export const PokemonImage = styled.img`
  position: absolute;
  width: 200px;
  z-index: 10000;
`;
export const PokemonContent = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px;
  padding-top: 170px;
  text-align: center;
  color: white;
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-shadow: 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: bolder;
    margin: 0.3rem;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    column-gap: 1rem;
    text-transform: capitalize;
    margin: 0;
  }
`;

export const CatchButton = styled.button`
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 1rem;
  font-weight: bolder;
  font-size: large;
  text-transform: uppercase;

  color: black;
  background-color: rgba(218, 44, 56);
  border-radius: 2rem;
  border: none;

  &:hover {
    background-color: rgba(33, 37, 41);
    border: 3px solid rgba(218, 44, 56);
    color: rgba(218, 44, 56);
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  padding: 1rem 3rem 1rem 3rem;
  margin: 0;
  top: 1rem;
  left: 1rem;

  font-weight: bolder;
  font-size: larger;
  text-transform: uppercase;
  text-decoration-line: none;
  color: #7bf1a8;
  background-color: rgba(22, 138, 173, 0.6);
  border-radius: 2rem;

  &:hover {
    background-color: rgba(22, 138, 173, 1);
  }
`;

export const Loader = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
  border-radius: 50%;
  border: 8px solid black;
  animation: spin 1s linear infinite;

  &::before {
    content: "";
    position: absolute;
    height: 8px;
    width: 100px;
    background: black;
    top: 50px;
    transform: translatey(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background: white;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white,
      inset 0 0 0 12px black;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
