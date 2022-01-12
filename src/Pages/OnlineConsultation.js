import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
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
      <Helmet>
        <title>Online Consultation - GarbhaGudi</title>
        <meta
          name="description"
          content="Begin your journey towards parenthood from the comfort of your Home."
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
      <Workflow />
      <Advantages />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default OnlineConsultation;
