import React from "react";
import loadable from "@loadable/component";
const Advancements = loadable(() =>
  import("Pages/MaleInfertility/Advancements")
);
const Banner = loadable(() => import("Pages/MaleInfertility/banner"));
const Header = loadable(() => import("Components/header/HeaderMaleInf/header"));
const WhatIs = loadable(() => import("Pages/MaleInfertility/whatIs"));
const Causes = loadable(() => import("Pages/MaleInfertility/Causes"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));

const MaleInfertility = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WhatIs />
      <Causes />
      <Advancements />
      <SubscribeUs />
    </div>
  );
};

export default MaleInfertility;
