import React from "react";
import loadable from "@loadable/component";
import WorkFlow from "demos/Paripoorna/Workflow";
const Banner = loadable(() => import("demos/Paripoorna/Banner"));
const Header = loadable(() => import("Components/header/HeaderPp/header"));
const Benefits = loadable(() => import("demos/Paripoorna/Benefits"));
const Faq = loadable(() => import("demos/Paripoorna/faq"));

const Paripoorna = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WorkFlow />
      <Benefits />
      <Faq />
    </div>
  );
};

export default Paripoorna;
