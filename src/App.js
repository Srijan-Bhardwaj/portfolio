import React from "react";
import Fpage from "./FrontPage";
import Menu from "./Menu";
import Skill from "./Skills";
import Project from './Projects';
import Scroller from './Scroller';

const App = () => {
  return (
    <>
      <div className="container_page">
        <Menu />
        <Fpage />
      </div>
      <Scroller/>
      <Skill />
      <Project/>
    </>
  );
};

export default App;
