/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "Components/section-heading";
import illustration from "assets/images/subscribe-bg.webp";
import loadable from "@loadable/component";
const Video = loadable(() => import("Pages/Home/Video"));

const SubscribeUs = () => {
  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box as="form" sx={styles.subscribe}>
            <SectionHeading
              title="Let us take your dream forward"
              description="Meet this happy couple who turned their dream into a reality, and now it's your turn."
            />
            <Video url="https://www.youtube.com/watch?v=YVyaYhk8Hbk&t=4s" />
            <Box>
              <Button variant="secondary">
                <a href="https://garbhagudi.com/contact/">
                  Get a Free Consultation Now
                </a>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      "none",
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center / cover`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: "transparent",
    borderRadius: 15,
    p: [null, null, null, "10px 110px 10px", "10px 10px", "10px"],
    display: ["block", null, "grid", "block", "grid"],
  },
  subscribe: {
    marginX: "auto",
    button: {
      mx: "25%",
      mt: "50px",
    },
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
