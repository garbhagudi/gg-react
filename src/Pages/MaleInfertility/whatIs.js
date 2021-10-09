import React from "react";
import { Container, Box } from "theme-ui";
import SectionHeading from "Components/section-heading";

const WhatIs = () => {
  return (
    <Container id="intro" sx={styles.section}>
      <Box sx={styles.wrapper}>
        <SectionHeading
          sx={styles.heading}
          title="What is Male Infertility ?"
          description="Male infertility is more common than you think and nothing to be ashamed of. It is a health issue in a man, which lowers the chances of his female partner getting pregnant. In over 50 % of infertility cases; the problem is male infertility and is most often due to problems with his sperm production or with sperm delivery. Thankfully, there are solutions to treat male infertility."
        />
      </Box>
    </Container>
  );
};

export default WhatIs;

const styles = {
  section: {
    pt: [null, null, null, 9, null, 10, 4],
    pb: [null, null, null, 10, 4],
  },
  heading: {
    mt: ["5px", null, null, "35px"],
    textAlign: "center",
    lineHeight: ["26px", null, null, null, 1.4],
  },
};
