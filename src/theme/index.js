/* eslint-disable import/no-anonymous-default-export */
export default {
  // example colors with dark mode
  colors: {
    text: "#343D48", // body color and primary color
    textSecondary: "#02073E", // secondary body color
    heading: "#0F2137", // primary heading color
    headingSecondary: "#343D48", // heading color
    background: "#FFFFFF", // body background color
    backgroundSecondary: "#F9FBFD", // secondary background color
    borderColor: "#F3F4F5", // border color
    primary: "#0A8080", // primary button and link color
    secondary: "#EA4b6A", // secondary color - can be used for hover states
    muted: "#7B8188", // muted color
    accent: "#609", // a contrast color for emphasizing UI
    dark: "#10132D",
    link: "#4F96FF", // default link color
    primary2: "#1F3E76", // primary button and link color
    secondary2: "#25CB9E",

    // highlight	a background color for highlighting text
  },
  fonts: {
    body: "DM Sans",
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "B612, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    18, // 3
    20, // 4
    22, // 5
    24, // 6
    28, // 7
    32, // 8
    36, // 9
    42, // 10
    48, // 11
    52, // 12
    64, //13
  ],
  fontWeights: {
    body: "normal",
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25,
    // heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [
    0, //0
    5, //1
    10, //2
    15, //3
    20, //4
    25, //5
    30, //6
    40, //7
    50, //8
    60, //9
    70, //10
    80, //11
    100, //12
    120, //13
    130, //14
    150, //15
  ],
  sizes: {},
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1200px",
    "1367px",
    "1440px",
    "1600px",
  ],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ["100%", null, null, null, "970px", "1140px", "1260px"],
      paddingLeft: [3, 6],
      paddingRight: [3, 6],
      m: "0 auto",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {},
  },
  section: {
    banner: {},
    workflow: {
      py: [8, null, 9, null, null, 10],
      backgroundColor: "background_secondary",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    heroTitle: {
      fontSize: [4, null, null, 5, null, 5, 6],
      fontWeight: 700,
      letterSpacing: "heading",
      lineHeight: [1.4, null, null, null, null, null, 1.57],
    },
    heroPrimary: {
      color: "white",
      fontSize: [
        "35px",
        "35px",
        "48px",
        "48px",
        "48px",
        "48px",
        "48px",
        "48px",
      ],
      lineHeight: 1.2,
      fontWeight: 700,
      mb: [5, null, null, null, "30px"],
    },
    heroSecondary: {
      color: "white",
      fontSize: [2, 3, 4, "17px", null, 3, "19px", 4],
      lineHeight: [2, null, null, null, 2.2],
      fontWeight: "body",
      pr: [0, null, null, null, null, "100px", null, "125px"],
      mb: ["35px", null, null, null, "40px", null, null, 7],
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
    },
    logo: {
      display: "inline-flex",
    },
    learnMore: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: 700,
      color: "primary",
    },
    nav: {
      display: ["none", null, "inline-flex"],
      p: 2,
    },
    footer: {
      display: "flex",
      px: 0,
      color: "inherit",
      textDecoration: "none",
      fontSize: "14px",
      lineHeight: 2.5,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: ["block", null, null, null, "none"],
      svg: {
        width: "32px",
      },
    },
    default: {
      backgroundColor: "transparent",
      fontFamily: "body",
      fontWeight: "bold",
      borderRadius: "5px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s ease-in-out 0s",
      whiteSpace: "nowrap",
    },
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", 1, null, null, 2],
      letterSpacings: ["-0.5px", null, null, null, "-0.15px"],
      padding: ["11px 20px 10px", null, null, null, "13px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      fontWeight: 500,
      "&:focus": {
        outline: 0,
      },
    },
    primary: {
      variant: "buttons.default",
      color: "white",
      bg: "primary",
      minHeight: ["50px", null, null, null, null, "60px"],
      padding: ["0 15px", null, null, "0 20px"],
      "&:hover": {
        bg: "dark",
      },
    },
    primaryMd: {
      variant: "buttons.primary",
      minHeight: "30px",
      px: "5px",
      color: "white",
      bg: "secondary",
    },
    secondary: {
      variant: "buttons.primary",
      color: "white",
      bg: "secondary",
    },
    muted: {
      variant: "buttons.default",
      backgroundColor: "#EDF0F2",
      color: "text",
      ":hover": {
        backgroundColor: "primary",
        color: "#fff",
      },
    },
    white: {
      variant: "buttons.default",
      backgroundColor: "white",
      color: "#020718",
    },
    whiteButton: {
      variant: "buttons.defaultBtn",
      color: "secondary",
      bg: "white",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 12px 24px -10px",
      },
    },
    text: {
      variant: "buttons.default",
      color: "text",
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      color: "white",
      display: "flex",
      alignItems: "center",
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5,
    },
    featureCard: {
      display: "flex",
      alignItems: ["center", "flex-start"],
      flexDirection: ["column", "row"],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderRadius: 8,
      borderColor: "borderColor",
      height: 60,
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },

  badges: {
    primary: {
      color: "background",
      bg: "#28A5FF",
      borderRadius: 30,
      p: "3px 11px",
      fontSize: 1,
      letterSpacing: "-0.5px",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    // h1-h6 Heading styles
    h1: {
      // fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 6,
    },
    h2: {
      // fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};
