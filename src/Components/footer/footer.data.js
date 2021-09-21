import facebook from "assets/images/icons/facebook.png";
import twitter from "assets/images/icons/twitter.png";
import youtube from "assets/images/icons/youtube.png";
import linkedin from "assets/images/icons/linkedin.png";

export const menuItems = [
  {
    id: 2,
    title: "About Us",
    items: [
      {
        path: "https://garbhagudi.com/about-overview/",
        label: "About Us",
      },
      {
        path: "tel:8880000909",
        label: "Call us",
      },
      {
        path: "mailto:dreams@garbhagudi.com",
        label: "Email",
      },
    ],
  },
  {
    id: 3,
    title: "Our Information",
    items: [
      {
        path: "#!",
        label: "Refund Policy ",
      },
      {
        path: "#!",
        label: "Privacy Policy",
      },
      {
        path: "#!",
        label: "Terms & Conditions",
      },
    ],
  },
  {
    id: 4,
    title: "Other Pages",
    items: [
      {
        path: "#!",
        label: "IVF from Home ",
      },
      {
        path: "#!",
        label: "Male Infertility",
      },
      {
        path: "#!",
        label: "Online Consultation",
      },
    ],
  },
  {
    id: 5,
    title: "Connect",
    items: [
      {
        path: "https://www.facebook.com/garbhagudiIVF",
        icon: facebook,
        label: "Facebook",
      },
      {
        path: "https://twitter.com/garbhagudiivf",
        icon: twitter,
        label: "Twitter",
      },
      {
        path: "https://www.youtube.com/c/GarbhaGudiIVFCentre/videos",
        icon: youtube,
        label: "Youtube",
      },
      {
        path: "https://www.linkedin.com/company/garbagudi",
        icon: linkedin,
        label: "Linkedin",
      },
    ],
  },
];
