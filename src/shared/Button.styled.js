import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.6em 1em;
  text-align: center;
  font-size: ${props => props.fs || "1.3rem"};
  margin: ${props => props.mg || "auto"};
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5%;
  background-color: white;
  color: black;
  border: 2px solid #333;
  @media (max-width: 426px) {
    font-size: 1rem;
  }
  &:hover {
    background-color: #333;
    color: white;
  }
`;
