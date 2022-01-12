import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Banner = loadable(() => import("Pages/Paripoorna/kn/knBanner"));
const Benefits = loadable(() => import("Pages/Paripoorna/kn/knBenefits"));
const Faq = loadable(() => import("Pages/Paripoorna/kn/knfaq"));
const Video = loadable(() => import("Pages/Paripoorna/kn/knvideo-one"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));
const WorkFlow = loadable(() => import("Pages/Paripoorna/kn/knWorkflow"));

const KnParipoorna = () => {
  return (
    <div>
      <Helmet>
        <title>ಪರಿಪೂರ್ಣ - ಗರ್ಭಗುಡಿ</title>
        <meta
          name="description"
          content="Your next step in infertility treatment"
        />
        <meta property="og:title" content=" ಪರಿಪೂರ್ಣ - ಗರ್ಭಗುಡಿ" />
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
      <Banner />
      <WorkFlow />
      <Video />
      <Benefits />
      <Faq />
      <SubscribeUs />
    </div>
  );
};
export default KnParipoorna;
