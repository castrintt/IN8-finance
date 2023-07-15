import React from "react";
import { Item } from "./SidebarItems.style";
import { IconType } from "react-icons";

type SidebarItemsProps = {
  selected: boolean;
  action: () => void;
  icon: IconType;
};

const SidebarItems = ({ icon: Icon, selected, action }: SidebarItemsProps) => {
  return (
    <Item selected={selected} onClick={action}>
      <Icon />
    </Item>
  );
};

export default SidebarItems;
