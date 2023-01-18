import styled from "styled-components";

export const Main = styled.div`
  font-family: sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
  }
`;
export const FilterContainer = styled.div`
  padding: 1rem;
`;

export const DropDownList = styled.select`
  width: 18rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 3px solid rgb(87, 204, 153);
  font-weight: bold;
  font-size: 1rem;
`;
export const ListItem = styled.option``;

export const Label = styled.label`
  color: rgba(27, 117, 123, 1);
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Search = styled.input`
  width: 18rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 3px solid rgb(87, 204, 153);
  font-weight: bold;
  font-size: 1rem;
`;
