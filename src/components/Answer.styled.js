import styled from "styled-components";

export const AnswerStyled = styled.li`
  border: 1px solid black;
  margin: 0.8em 0;
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  &.correct {
    transition: background 500ms;
    background: green;
  }
  &.incorrect {
    transition: background 500ms;
    background: red;
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const AnswerList = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
`;
