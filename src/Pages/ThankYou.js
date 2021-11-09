import Header from "Components/header/HeaderTechnicals/header";
import SectionHeading from "Components/section-heading";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Box, Button } from "theme-ui";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <div sx={styles.wrapper}>
        <Box sx={styles.heading}>
          <SectionHeading
            title="Thank you"
            description="Our representative will get in touch with you soon!"
          />
        </Box>
        <Box sx={styles.homeBtn}>
          <Button variant="secondary">
            <Link to="/">Go Home</Link>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ThankYou;

const styles = {
  heading: {
    padding: "125px",
  },
  homeBtn: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    transform: ["unset", null, null, "translateX(-50%)"],
    mt: "-100px",
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
