import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Advancements = loadable(() =>
  import("Pages/MaleInfertility/Advancements")
);
const Banner = loadable(() => import("Pages/MaleInfertility/banner"));
const WhatIs = loadable(() => import("Pages/MaleInfertility/whatIs"));
const Causes = loadable(() => import("Pages/MaleInfertility/Causes"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));

const MaleInfertility = () => {
  return (
    <div>
      <Helmet>
        <title>Male Infertility - GarbhaGudi</title>
        <meta
          name="description"
          content="Best Male Infertility Treatment in Bangalore."
        />
        <meta
          property="og:title"
          content="Male Infertility - GarbhaGudi IVF Centre"
        />
        <meta property="og:type" content="webpage" />
        <meta
          property="og:url"
          content="https://garbhagudi-ivf.com/male-infertility"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1633780493/garbhagudi-ivf/Banners/maleInf_umubsg.webp"
        />
        <meta name="twitter:site" content="@garbhagudiivf"></meta>
        <meta name="twitter:title" content="Garbhagudi IVF Centre " />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/v1633780493/garbhagudi-ivf/Banners/maleInf_umubsg.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
      <Banner />
      <WhatIs />
      <Causes />
      <Advancements />
      <SubscribeUs />
    </div>
  );
};

export default MaleInfertility;
