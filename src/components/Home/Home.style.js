import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(251, 233, 185);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 230, 1) 0%,
    rgba(248, 251, 228, 1) 27%,
    rgba(118, 200, 147, 1) 73%,
    rgba(82, 182, 154, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30%;
`;
