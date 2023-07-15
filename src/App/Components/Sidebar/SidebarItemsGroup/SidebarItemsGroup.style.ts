import { styled } from "styled-components";

export const GroupContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow-y: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.4rem;
  transition-duration: 0.5s;

  svg {
    color: rgba(0, 140, 255, 0.726);
  }

  &:hover {
    transition-duration: 0.5s;
    background-color: rgba(0, 140, 255, 0.726);
    svg {
      color: white;
    }
  }

  svg {
    font-size: 1.7rem;
  }
`;
