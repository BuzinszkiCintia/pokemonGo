import Fetch from "../Fetch/Fetch";
import {
  Main,
  DropDownList,
  ListItem,
  FilterContainer,
  Search,
  Label,
} from "./Filters.style";
import { useEffect, useState } from "react";

interface ItemData {
  name: string;
  url: string;
}

interface Props {
  setTypeURL: Function;
  setChecked: Function;
  setSearch: Function;
  checked: string[];
}

const Types = ({ setTypeURL, setChecked, checked, setSearch }: Props) => {
  let TYPE = sessionStorage.getItem("TYPE");
  let catchedPokemons = JSON.parse(sessionStorage.getItem("Catched") || "[]");
  const { data } = Fetch("https://pokeapi.co/api/v2/type");
  const [type, setType] = useState(TYPE || "");
  const [disabled, setDisabled] = useState(false);

  let handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("TYPE", e.target.value);
    setType(e.target.value);
    setTypeURL(e.target.value);
    setDisabled(true);
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked((checked: []) => [...checked, e.target.value]);
    } else {
      setChecked((checked: []) =>
        checked.filter((c: string) => c !== e.target.value)
      );
    }
  };

  useEffect(() => {
    if (type) {
      setDisabled(true);
    }
  }, []);

  return (
    <Main>
      <div>
        <FilterContainer>
          <DropDownList
            onChange={handleOptionChange}
            value={type}
            disabled={disabled}
          >
            <ListItem value="" disabled>
              Choose pokemon type...
            </ListItem>
            {data?.results?.map((menuItem: ItemData, index: number) => {
              return (
                <ListItem key={index} value={menuItem.url}>
                  {menuItem.name}
                </ListItem>
              );
            })}
          </DropDownList>
        </FilterContainer>
        {type && (
          <FilterContainer>
            <Search
              type="search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder="Search..."
            />
          </FilterContainer>
        )}
      </div>
      {catchedPokemons.length > 0 && (
        <FilterContainer>
          <Label>Catched pokemons:</Label>
          {catchedPokemons?.map((c: string, index: number) => {
            return (
              <div key={index}>
                <input type="checkbox" value={c} onChange={handleChecked} />
                <Label>{c}</Label>
              </div>
            );
          })}
        </FilterContainer>
      )}
    </Main>
  );
};

export default Types;
