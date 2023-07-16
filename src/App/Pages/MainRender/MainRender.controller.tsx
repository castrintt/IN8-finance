import { Paths } from "@routes/Paths";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { IconType } from "react-icons";
import { TbSettingsDollar } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";

type SidebarProperties = {
  selected: boolean;
  action: () => void;
  icon: IconType;
};

const UseMainRenderController = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const verifyIfPathIsValidToRender = (path: string): boolean => {
    return pathname.includes(path);
  };
  const sidebarProperties: SidebarProperties[] = [
    {
      selected: verifyIfPathIsValidToRender("/finances"),
      action: () => navigate("/finances"),
      icon: AiOutlineHome,
    },
    {
      selected: verifyIfPathIsValidToRender("/create"),
      action: () => navigate("/create"),
      icon: AiOutlineDollarCircle,
    },
    {
      selected: verifyIfPathIsValidToRender("/edit"),
      action: () => navigate("/edit"),
      icon: TbSettingsDollar,
    },
    {
      selected: verifyIfPathIsValidToRender("/graphics"),
      action: () => navigate("/graphics"),
      icon: BsGraphUp,
    },
    {
      selected: verifyIfPathIsValidToRender("/reports"),
      action: () => navigate("/reports"),
      icon: TbReportSearch,
    },
  ];
  const renderOption = () => {
    const CurrentPath = Paths.filter((values) =>
      verifyIfPathIsValidToRender(values.path)
    )[0];
    return <CurrentPath.Component /> ?? null;
  };

  return {
    Actions: {
      onRender: renderOption,
    },
    States: {
      sidebarItems: sidebarProperties,
    },
  };
};

export default UseMainRenderController;
