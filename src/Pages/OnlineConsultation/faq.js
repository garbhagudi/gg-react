/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Image } from "theme-ui";
import SectionHeading from "Components/section-heading";
import Accordion from "Components/accordion/accordion";

const data = [
  {
    title: "How can I access the Online Consultation? ",
    contents: (
      <div>
        You can click{" "}
        <a
          href="https://consult.bestdocapp.com/home/GARBHAGUDI"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        and follow the steps mentioned above to book an appointment. Details
        will be provided to you via the info provided during the booking stage.
      </div>
    ),
  },
  {
    title: "When should you use the Online Consultation service?",
    contents: (
      <div>
        Patients who are looking for non-critical care, a follow-up or second
        opinion, reviewing medical reports, initial treatments. <br /> While
        Online Consultation is not intended to replace your regular doctor or
        specialist for common or chronic conditions, an online consultation can
        sometimes substitute a doctor’s visit.
      </div>
    ),
  },
  {
    title: `Is it available 24x7?`,
    contents: (
      <div>
        While this service is only available during the working hours of the
        hospital, some exceptions can be made on emergency cases, severity of
        which will be defined on a case bby case basis
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section sx={styles.section} id="faq">
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image
              src="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_800/v1634563067/garbhagudi-ivf/Images%20/3731957_yjmv2x.webp"
              alt="messenger"
            />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Frequently Asked Questions"
              description="Check out out FAQ section and feel free to contact us at +918880000909 or drop an E-mail at dreams@garbhagudi.com and we will get back to you as soon as possible"
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  heading: {
    textAlign: ["left", null, null, "center", "left"],
    ml: [null, null, null, "auto"],
    mt: [8, null, null, null],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      Image: {
        mt: ["25px", null, null, "0"],
        height: ["500px", null, "500px", "auto"],
        display: "flex",
        marginLeft: ["0", null, null, null, "auto"],
        marginRight: ["0", null, null, null, "auto"],
        position: "relative",
        top: [null, null, null, "-20px", "-45px", "auto"],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
};
