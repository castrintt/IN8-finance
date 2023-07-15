import React from "react";
import { FooterContainer } from "./SidebarFooter.style";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { LogoutService } from "@service/Logout.service";

const SidebarFooter = () => {
  const navigate = useNavigate();
  const logoutService = new LogoutService();
  const onClickLogoutIcon = () => {
    logoutService.logout();
    navigate("/");
  };
  return (
    <FooterContainer>
      <div onClick={onClickLogoutIcon}>
        <BiLogOut />
      </div>
    </FooterContainer>
  );
};

export default SidebarFooter;
