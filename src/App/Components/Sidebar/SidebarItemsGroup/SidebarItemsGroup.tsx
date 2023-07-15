import React from "react";
import { GroupContainer } from "./SidebarItemsGroup.style";

type Props = {
  children: React.ReactNode;
};

const SidebarItemsGroup = ({ children }: Props) => {
  return <GroupContainer>{children}</GroupContainer>;
};

export default SidebarItemsGroup;
