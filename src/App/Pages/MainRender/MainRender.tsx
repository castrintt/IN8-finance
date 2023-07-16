import React from "react";
import UseMainRenderController from "./MainRender.controller";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { MainHomeContainer, MainContentContainer } from "./MainRender.style";

const MainRender = () => {
  const { Actions, States } = UseMainRenderController();
  return (
    <MainHomeContainer>
      <Sidebar.Container>
        <Sidebar.GroupItems>
          {States.sidebarItems.map((properties, index) => (
            <React.Fragment key={index}>
              <Sidebar.Item {...properties} />
            </React.Fragment>
          ))}
        </Sidebar.GroupItems>
      </Sidebar.Container>
      <MainContentContainer>{Actions.onRender()}</MainContentContainer>
    </MainHomeContainer>
  );
};

export default MainRender;
