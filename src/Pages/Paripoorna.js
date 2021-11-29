import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Banner = loadable(() => import("Pages/Paripoorna/Banner"));
const Header = loadable(() => import("Components/header/HeaderPp/header"));
const Benefits = loadable(() => import("Pages/Paripoorna/Benefits"));
const Faq = loadable(() => import("Pages/Paripoorna/faq"));
const Video = loadable(() => import("Pages/Paripoorna/video-one"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const WorkFlow = loadable(() => import("Pages/Paripoorna/Workflow"));

const Paripoorna = () => {
  return (
    <div>
      <Helmet>
        <title>PARIPOORNA - GarbhaGudi</title>
        <meta
          name="description"
          content="Your next step in infertility treatment"
        />
        <meta property="og:title" content=" PARIPOORNA - GarbhaGudi " />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_1200/v1638189477/garbhagudi-ivf/Banners/Link_Share_Banner_i1ppok.webp"
        />
        <meta name="twitter:title" content="Garbhagudi IVF Centre" />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_1200/v1638189477/garbhagudi-ivf/Banners/Link_Share_Banner_i1ppok.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
      <Header />
      <Banner />
      <WorkFlow />
      <Video />
      <Benefits />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default Paripoorna;
