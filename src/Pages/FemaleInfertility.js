import React from "react";
import loadable from "@loadable/component";
import Helmet from "react-helmet";
const Banner = loadable(() => import("Pages/FemaleInfertility/Banner"));
const SymptomsCauses = loadable(() =>
  import("Pages/FemaleInfertility/SymptomsCauses")
);
const DiagnosisTreatment = loadable(() =>
  import("Pages/FemaleInfertility/DaignosisTreatment")
);
const Faq = loadable(() => import("Pages/FemaleInfertility/Faq"));
const SubscribeUs = loadable(() => import("Pages/Home/subscribe-us"));

const FemaleInfertility = () => {
  return (
    <div>
      <Helmet>
        <title>Female Infertility - GarbhaGudi</title>
        <meta
          name="description"
          content="Best female infertility treatment at bangalore with higest success rate and lowest treatment cost."
        />
        <meta property="og:title" content="GarbhaGudi IVF Centre" />
        <meta
          property="og:description"
          content="India's best female infertility treatment with highest success rate and lowest treatment cost. "
        />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_586,w_1200/v1637220770/garbhagudi-ivf/Banners/Young_married_couple_consulting_doctor_svxszn.webp"
        />
        <meta name="twitter:title" content="Garbhagudi IVF Centre" />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_586,w_1200/v1637220770/garbhagudi-ivf/Banners/Young_married_couple_consulting_doctor_svxszn.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Helmet>
      <Banner />
      <SymptomsCauses />
      <DiagnosisTreatment />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default FemaleInfertility;
