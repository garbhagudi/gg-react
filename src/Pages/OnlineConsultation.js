import React from "react";
import loadable from "@loadable/component";
const Header = loadable(() => import("Components/header/HeaderOc/header"));
const Banner = loadable(() => import("Pages/OnlineConsultation/Banner"));
const Advantages = loadable(() =>
  import("Pages/OnlineConsultation/Advantages")
);
const Workflow = loadable(() => import("Pages/OnlineConsultation/Workflow"));
const Faq = loadable(() => import("Pages/OnlineConsultation/faq"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));

const OnlineConsultation = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Workflow />
      <Advantages />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default OnlineConsultation;
