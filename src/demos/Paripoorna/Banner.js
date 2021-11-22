/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Grid, Container, Button, Image } from "theme-ui";
import { rgba } from "polished";
import { IoIosArrowForward } from "react-icons/io";
import SectionHeading from "Components/section-heading";
import Count from "Components/countdown/Clock";

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <div sx={styles.newsUpdate}>
              <span>NEWS</span>
              Paripoorna offer will be valid till Jan 1st 2022 &ensp;
              <span>
                <Count />{" "}
              </span>
              <IoIosArrowForward
                color={rgba("#02073E", 0.3)}
                size="14px"
                sx={{ ml: 1 }}
              />
            </div>
            <SectionHeading
              sx={styles.heading}
              title="Its the season of Joy of Being Complete"
              description="This holiday season avail upto ₹30,000/- off on your IVF treatment. Offer valid from Dec 01, 2021 till Jan 01, 2022"
            />
            <div sx={styles.buttonGroup}>
              <Button variant="secondary">Get Started</Button>
              <Button variant="white" className="white">
                Discover in video
              </Button>
            </div>
          </Box>
          <Flex as="figure" sx={styles.illustration}>
            <Image
              src="https://res.cloudinary.com/garbhagudi/image/upload/c_fit,h_633,w_696/v1637325037/garbhagudi-ivf/Banners/papu_zjbyqe.png"
              alt="illustration"
            />
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: `linear-gradient(180deg, rgba(255, 254, 252, 0.5) 0%, #FEFAF5 100%)`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ["center"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
    minHeight: [null, null, null, null, "45vh", "100vh"],
    pt: [8, null, null, 12, 4],
  },
  content: {
    textAlign: ["center", null, null, null, "left"],
    heading: {
      h2: {
        color: "textSecondary",
        fontWeight: "bold",
        fontSize: [9, null, null, null, 12, 14, 15],
        lineHeight: [1.33, null, null, null, 1.36],
        letterSpacing: "heading",
      },
    },

    p: {
      color: "textSecondary",
      fontSize: [1, null, null, 2],
      lineHeight: 2.62,
      maxWidth: 480,
      mx: [null, null, null, "auto", "unset"],
      marginTop: [1, null, null, 3],
    },
  },
  newsUpdate: {
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(67, 99, 136, 0.07)",
    borderRadius: 50,
    padding: "4px 15px 4px 5px",
    display: "inline-flex",
    alignItems: "center",
    color: rgba("#02073E", 0.9),
    fontSize: ["12px", null, null, 1],
    mb: 4,
    textAlign: "left",
    span: {
      backgroundColor: "secondary",
      color: "white",
      fontSize: ["10px", null, null, "13px"],
      fontWeight: 700,
      display: "inline-flex",
      minHeight: 24,
      alignItems: "center",
      px: "11px",
      borderRadius: 50,
      mr: "12px",
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ["17px", 4],
    },
    ".white": {
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
    },
  },
  illustration: {
    maxWidth: [null, null, null, "80%", "none"],
    mx: [null, null, null, "auto", "unset"],
    mt: [6, null, null, null, 0],
    alignItems: "center",
  },
};
