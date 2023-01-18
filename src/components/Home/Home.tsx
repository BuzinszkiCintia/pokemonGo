import Types from "../Filters/Filters";
import TypeOfPokemons from "../TypeOfPokemons/TypeOfPokemons";
import { useState } from "react";
import { HomeContainer, Logo } from "./Home.style";
import logo from "../../images/logo.png";

const Home = () => {
  const [typeURL, setTypeURL] = useState(sessionStorage.getItem("TYPE"));
  const [checked, setChecked] = useState<any>([]);
  const [search, setSearch] = useState("");

  return (
    <HomeContainer>
      <Logo src={logo} alt="logo" />
      <Types
        setTypeURL={setTypeURL}
        setChecked={setChecked}
        checked={checked}
        setSearch={setSearch}
      />
      {typeURL && (
        <TypeOfPokemons url={typeURL} checked={checked} search={search} />
      )}
    </HomeContainer>
  );
};

export default Home;
