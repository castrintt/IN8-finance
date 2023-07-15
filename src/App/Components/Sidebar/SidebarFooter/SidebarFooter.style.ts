import { styled } from "styled-components";

export const FooterContainer = styled.div`
  flex-grow: 0;
  width: 100%;
  height: 5rem;
  transition-duration: 0.5s;

  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    height: 50%;
    padding-block: 0.4rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }
  svg {
   color: rgba(0, 140, 255, 0.726);
  }

  div:hover {
    transition-duration: 0.5s;
    background-color: rgba(0, 140, 255, 0.726);
    svg {
      color: white;
    }
  }
`;
