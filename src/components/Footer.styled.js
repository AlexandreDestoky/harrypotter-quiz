import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 426px) {
    flex-direction: column;
    p {
      margin-bottom: 10px;
    }
  }
`;
