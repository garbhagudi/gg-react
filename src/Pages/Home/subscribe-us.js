/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "Components/section-heading";
import illustration from "assets/images/subscribe-bg.webp";

const SubscribeUs = () => {
  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box as="form" sx={styles.subscribe}>
            <SectionHeading
              title="Let us take your dream forward"
              description="Book an Appointment and get a free consultation"
            />
            <Box>
              <Button variant="secondary">
                <a href="https://garbhagudi.com/contact/">Register Now</a>
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
    p: [null, null, null, "40px 110px 50px", "50px 50px", "40px"],
    gap: "50px",
    display: ["block", null, "grid", "block", "grid"],
  },
  subscribe: {
    marginX: "auto",
    button: {
      mx: "35%",
    },
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
