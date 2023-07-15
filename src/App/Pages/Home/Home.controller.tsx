import { useState } from "react";
import { Paths } from "@routes/Paths";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { IconType } from "react-icons";
import { TbSettingsDollar } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";

type SidebarProperties = {
  selected: boolean;
  action: () => void;
  icon: IconType;
};

const UseHomeController = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(true);

  const verifyIfPathIsValidToRender = (path: string): boolean => {
    return pathname === path;
  };


  const sidebarProperties: SidebarProperties[] = [
    {
      selected: verifyIfPathIsValidToRender("/home/finances"),
      action: () => navigate("/home/finances"),
      icon: AiOutlineHome,
    },
    {
      selected: verifyIfPathIsValidToRender("/home/edit"),
      action: () => navigate("/home/edit"),
      icon: TbSettingsDollar,
    },
    {
      selected: verifyIfPathIsValidToRender("/home/create-new"),
      action: () => navigate("/home/create-new"),
      icon: AiOutlineDollarCircle,
    },
    {
      selected: verifyIfPathIsValidToRender("/home/view-user"),
      action: () => navigate("/home/view-user"),
      icon: BiUser,
    },
    {
      selected: verifyIfPathIsValidToRender("/home/edit-user"),
      action: () => navigate("/home/edit-user"),
      icon: LiaUserEditSolid,
    },
  ];

  const openCloseDrawer = () => setOpenDrawer(!openDrawer);

  const renderOption = () => {
    const CurrentPath = Paths.filter((values) =>
      verifyIfPathIsValidToRender(values.path)
    )[0];
    return <CurrentPath.Component /> ?? null;
  };

  return {
    Actions: {
      onRender: renderOption,
      onOpenDrawer: openCloseDrawer,
    },
    States: {
      drawerIsOpen: openDrawer,
      sidebarItems: sidebarProperties,
    },
  };
};

export default UseHomeController;
