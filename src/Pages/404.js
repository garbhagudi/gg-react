import React from "react";
import { Box, Container, Button } from "theme-ui";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "Components/header/HeaderTechnicals/header";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <Box as="section" id="home" sx={styles.section}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <Box as="figure" sx={styles.illustration}>
              <Box sx={styles.buttonWrapper}>
                <Button variant="secondary">
                  <Link to="/">Home</Link>
                </Button>
              </Box>
              <LazyLoadImage
                src="https://res.cloudinary.com/garbhagudi/image/upload/v1636795610/garbhagudi-ivf/Images%20/2451354_x5wh8z.jpg"
                alt="illustration"
                style={{ marginTop: "30px" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default PageNotFound;

const styles = {
  section: {
    // backgroundColor: "secondary",
    position: "relative",
    pt: [105, null, null, 140, 15, null, 170],
    pb: [105, null, null, 140, 15, null, 170],
    zIndex: 0,
    ":before": {
      content: ["none", null, null, `''`],
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  illustration: {
    display: ["block", null, null, "flex"],
    position: "relative",
    img: {
      display: ["block", null, null, "block"],
      maxWidth: ["90%"],
      m: ["0 auto"],
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
