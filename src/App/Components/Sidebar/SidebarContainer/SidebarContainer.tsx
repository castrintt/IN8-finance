import React from "react";
import { Container } from "./SidebarContainer.style";

type SidebarContainerProps = {
  children: React.ReactNode;
};

const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return <Container>{children}</Container>;
};

export default SidebarContainer;
