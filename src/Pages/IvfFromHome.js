import React from "react";
import loadable from "@loadable/component";
const IfhHeader = loadable(() =>
  import("Components/header/HeaderIVFHome/header")
);
const Banner = loadable(() => import("Pages/IvfFromHome/banner"));
const WorkFlow = loadable(() => import("Pages/IvfFromHome/workflow"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const Features = loadable(() => import("Pages/IvfFromHome/features"));
const Faq = loadable(() => import("Pages/IvfFromHome/faq"));
const VideoTwo = loadable(() => import("Pages/IvfFromHome/video-ifh"));

const IvfFromHome = () => {
  return (
    <div>
      <IfhHeader />
      <Banner />
      <VideoTwo />
      <WorkFlow />
      <Features />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default IvfFromHome;
