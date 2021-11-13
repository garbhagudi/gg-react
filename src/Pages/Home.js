import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Header = loadable(() => import("Components/header/HeaderHome/header"));
const Banner = loadable(() => import("Pages/Home/banner"));
const Testimonials = loadable(() => import("Pages/Home/testimonials"));
const OurTeam = loadable(() => import("Pages/Home/our-team"));
const OtherServices = loadable(() => import("Pages/Home/other-services"));
const WhyUs = loadable(() => import("Pages/Home/why-us"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const VideoOne = loadable(() => import("Pages/Home/video-one"));
const Calculators = loadable(() => import("Pages/Home/calculators"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GarbhaGudi IVF Center - Home</title>
        <meta
          name="description"
          content="Your next step in infertility treatment"
        />
        <meta property="og:title" content="GarbhaGudi IVF Center" />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1633779918/garbhagudi-ivf/Banners/banner-illustration_ywl2xw.webp"
        />
        <meta name="twitter:title" content="Garbhagudi IVF Center" />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/v1633779918/garbhagudi-ivf/Banners/banner-illustration_ywl2xw.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
      <Header />
      <Banner />
      <OtherServices />
      <Calculators />
      <OurTeam />
      <Testimonials />
      <WhyUs />
      <VideoOne />
      <SubscribeUs />
    </div>
  );
};

export default Home;
