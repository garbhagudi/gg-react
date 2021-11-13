import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
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
      <Helmet>
        <title>IVF From Home - GarbhaGudi</title>
        <meta
          name="description"
          content="Initialise your IVF treatment from the comfort of your home"
        />
        <meta
          property="og:title"
          content="IVF From Home - GarbhaGudi IVF Centre"
        />
        <meta property="og:type" content="webpage" />
        <meta
          property="og:url"
          content="https://garbhagudi-ivf.com/ivf-from-home"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1633779919/garbhagudi-ivf/Banners/ivffromhome_tdjvoq.webp"
        />
        <meta name="twitter:site" content="@garbhagudiivf"></meta>
        <meta name="twitter:title" content="Garbhagudi IVF Centre " />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/v1633779919/garbhagudi-ivf/Banners/ivffromhome_tdjvoq.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
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
