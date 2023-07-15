import React from "react";
import UseHomeController from "./Home.controller";
import { Sidebar } from "@components/Sidebar/Sidebar";

const Home = () => {
  const { Actions, States } = UseHomeController();

  return (
    <div>
      <Sidebar.Container>
        <Sidebar.HeaderGroup >
          {States.sidebarItems.map((properties, index) => (
            <React.Fragment key={index}>
              <Sidebar.Item {...properties} />
            </React.Fragment>
          ))}
        </Sidebar.HeaderGroup>
        <Sidebar.Footer />
      </Sidebar.Container>
      {Actions.onRender()}
    </div>
  );
};

export default Home;
