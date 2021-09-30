import React from "react";
import loadable from "@loadable/component";
import "rc-tabs/assets/index.css";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "Components/icons/logo.css";
import "react-modal-video/css/modal-video.min.css";
const Banner = loadable(() => import("Pages/Home/banner"));
const Services = loadable(() => import("Pages/Home/services"));
const Testimonials = loadable(() => import("Pages/Home/testimonials"));
const OurTeam = loadable(() => import("Pages/Home/our-team"));
const OtherServices = loadable(() => import("Pages/Home/other-services"));
const WhyUs = loadable(() => import("Pages/Home/why-us"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const VideoOne = loadable(() => import("Pages/Home/video-one"));
// const Blog = loadable(() => import("Pages/Home/blog"));

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Testimonials />
      <OurTeam />
      <OtherServices />
      <WhyUs />
      <VideoOne />
      {/* <Blog /> */}
      <SubscribeUs />
    </div>
  );
};

export default Home;
