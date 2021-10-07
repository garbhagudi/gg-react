import React from "react";
import loadable from "@loadable/component";
import "../app.css";
import "rc-drawer/assets/index.css";

const Header = loadable(() => import("Components/header/HeaderHome/header"));
const Banner = loadable(() => import("Pages/Home/banner"));
const Testimonials = loadable(() => import("Pages/Home/testimonials"));
const OurTeam = loadable(() => import("Pages/Home/our-team"));
const OtherServices = loadable(() => import("Pages/Home/other-services"));
const WhyUs = loadable(() => import("Pages/Home/why-us"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const VideoOne = loadable(() => import("Pages/Home/video-one"));

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Testimonials />
      <OurTeam />
      <OtherServices />
      <WhyUs />
      <VideoOne />
      <SubscribeUs />
    </div>
  );
};

export default Home;
