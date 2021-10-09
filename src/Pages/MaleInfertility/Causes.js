import React from "react";
import { Box, Container, Grid, Text, Heading } from "theme-ui";
import loadable from "@loadable/component";
import { rgba } from "polished";
const Image = loadable(() => import("Components/image"));

const Causes = () => {
  return (
    <div sx={styles.section}>
      <Box sx={styles.banner} id="causes">
        <Container sx={styles.container}>
          <Heading as="h3">What causes male Infertility?</Heading>
          <Grid sx={styles.grid}>
            <Box sx={styles.content}>
              <Text as="p">
                There are many reasons for this and some are discussed below.
                <br />
                <Heading as="h4" style={{ marginTop: "20px" }}>
                  Low Sperm Count
                </Heading>
                <br />A man’s sperm count is considered lower than normal if he
                has fewer than 15 million sperm per mL of semen which can
                decrease the chances of conceiving a child simply because it
                means fewer opportunities for fertilization. Low sperm count is
                caused by a variety of physiological, environmental and
                lifestyle factors, from infections, hormonal imbalances, and
                autoimmune problems, to emotional stress, depression and
                obesity.
              </Text>
            </Box>
            <Box sx={styles.image}>
              <Image
                src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780881/garbhagudi-ivf/Images%20/low-sperm_j21spq.jpg"
                alt="Low Sperm Count Image"
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </Box>
          </Grid>
        </Container>

        <Container sx={styles.container}>
          <Grid sx={styles.grid}>
            <Box sx={styles.content}>
              <Text as="p">
                <Heading as="h4">Poor sperm movement</Heading>
                <br />
                Sperm motility refers to the ability of sperm to move
                efficiently. It is important in fertility because sperm need to
                move rapidly and directly through the woman’s reproductive tract
                in order to reach and fertilize her egg before the sperm cells
                die. Damage to the testicles, which make and store sperms could
                be a reason for low sperm motility.
              </Text>
            </Box>
            <Box sx={styles.image}>
              <Image
                src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780880/garbhagudi-ivf/Images%20/sperm-movement_mpnozg.jpg"
                alt="IVF from Home Logo"
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </Box>
          </Grid>
        </Container>

        <Container sx={styles.container}>
          <Grid sx={styles.grid}>
            <Box sx={styles.content}>
              <Text as="p">
                <Heading as="h4">Abnormal Sperm Shape</Heading>
                <br />
                Sperm size and shape is another factor affecting fertility.
                Normal sperm have an oval head with a long tail. Abnormal sperm
                have faulty heads, or tail anomalies which might affect the
                ability of the sperm to reach and penetrate an egg. Men with
                abnormally shaped sperm tend to have more trouble in the
                conception process and the shape of sperm is typically a factor
                in whether a couple is advised to pursue IVF.
              </Text>
            </Box>
            <Box sx={styles.image}>
              <Image
                src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780880/garbhagudi-ivf/Images%20/sperm-abnormal_doltpg.jpg"
                alt="IVF from Home Logo"
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </Box>
          </Grid>
        </Container>

        <Container sx={styles.container}>
          <Grid sx={styles.grid}>
            <Box sx={styles.content}>
              <Text as="p">
                <Heading as="h4">Sperm Quality</Heading>
                <br />
                Degradation of sperm DNA affects the health of an embryo’s
                genetic make-up, and can contribute to miscarriage. After men
                turn 40, the quality of their sperm’s genetic material lessens
                and the new sperm isn’t as good as the sperm they produced when
                younger. It’s a natural and irreversible effect of aging, much
                like how women’s eggs deteriorate after age 35. Declining sperm
                quality may not impact a man’s ability to ejaculate or
                successfully fertilize an egg, but it is more likely to make an
                embryo nonviable.
              </Text>
            </Box>
            <Box sx={styles.image}>
              <Image
                src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780880/garbhagudi-ivf/Images%20/sperm-quality_aqp6kp.jpg"
                alt="IVF from Home Logo"
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </Box>
          </Grid>
        </Container>
        <Container sx={styles.container}>
          <Heading as="h3">So what should a man do?</Heading>
          <Text as="p">
            The first step is to go for a fertility consulting with an
            urologist. The urologist will give you a physical exam and ask you
            questions about your lifestyle and medical history, such as:
            surgeries you've had, medications you take, your exercise habits and
            whether you smoke or take recreational drugs. They may also have a
            frank discussion with you about your sex life, including any
            problems you've had or whether you have or ever had any sexually
            transmitted diseases. You'll then be asked to give a sample of semen
            for analysis.
          </Text>
        </Container>
      </Box>
    </div>
  );
};

export default Causes;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  banner: {
    pt: ["80px", null, null, null, "100px", "100px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
    h3: {
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "50px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "100%"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
      textAlign: "center",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 1.4],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "900px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
      h4: {
        fontWeight: "bold",
        letterSpacing: ["-.7px", "-1.5px"],
        width: ["100%"],
        maxWidth: ["100%", null, null, "90%", "100%", "full"],
        fontSize: [3, null, null, "36px", null, "55px", 6],
        color: "secondary",
      },
    },
  },
  image: {
    maxWidth: "350px",
    mx: "auto",
    img: {
      display: ["block", null, null, "flex"],
      width: "250px",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "100%"],
      float: [null, null, null, "right"],
      mt: ["20px", null, null, "60px"],
      mb: ["20px", null, null, "10px"],
    },
  },
};
