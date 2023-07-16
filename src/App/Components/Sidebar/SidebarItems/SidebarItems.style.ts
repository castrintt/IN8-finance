import { styled } from "styled-components";

export const Item = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? "rgba(0, 140, 255, 0.726)" : "transparent"};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  transition-duration: 0.5s;
  border-radius: 0.5rem;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 140, 255, 0.726);
    transition-duration: 0.5s;
    svg {
      color: white;
    }
  }

  svg {
    font-size: 1.7rem;
    color: ${({ selected }) =>
      selected ? "white" : "rgba(0, 140, 255, 0.726)"};
    position: relative;
    left: 0.66rem;
  }
`;
