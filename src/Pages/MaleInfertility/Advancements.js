import React from "react";
import { Box, Container, Text, Heading } from "theme-ui";

const Advancements = () => {
  return (
    <Box sx={styles.banner} id="advancements">
      <Container sx={styles.container}>
        <Heading as="h3">Advancements in the Field of Male Infertility</Heading>
        <Heading as="h4">Computer Assisted Sperm Analysis (CASA)</Heading>
        <Text as="p">
          A semen analysis is a test performed to screen for male fertility
          problems. The evaluation of sperm cell motility (movement) and
          morphology (shape and size) is an essential parameter in the
          examination of sperm quality and CASA allows an objective assessment
          of sperm quality. At GarbhaGudi, we use a sophisticated electronic
          imaging system to visualize the sperm and an advanced software program
          to evaluate dozens of individual sperm parameters. This examination
          provides very accurate results and treatment can be specifically
          tailored for male infertility.
        </Text>
      </Container>
      <Container sx={styles.container} style={{ marginTop: "45px" }}>
        <Heading as="h4">
          Percutaneous Epididymal Sperm Aspiration (PESA)
        </Heading>
        <Text as="p">
          PESA is a simple procedure that involves inserting a needle into the
          epididymis to extract fluid that contains sperm. The aspirated fluid
          will then be sent to the laboratory for sperm aspiration. The sperms
          extracted from the epididymis require a procedure called ICSI
          (intracytoplasmic sperm injection), an IVF procedure where the sperm
          cell is directly injected into the cytoplasm of the egg. This same-day
          procedure gives the benefit of not having to make an incision on the
          body. PESA is one of the most effective and successful techniques of
          sperm aspiration. If your testes are healthy to produce healthy sperms
          that are not able to make their way into the ejaculate, this same-day
          procedure would be considered as it does not involve any surgical
          incision.
        </Text>
      </Container>
      <Container sx={styles.container} style={{ marginTop: "45px" }}>
        <Heading as="h4">Testicular Sperm Aspiration (TESA)</Heading>
        <Text as="p">
          Similar to PESA, testicular sperm aspiration (TESA) is also one of the
          newest methods used in the treatment of infertility in men. This
          technique is widely recommended to men with azoospermia, in which
          there is a lack of sperm in the ejaculate. The invention of ICSI
          (intra-cytoplasmic sperm injection) has made it possible for a number
          of men with azoospermia to biologically father a child. This has been
          a breakthrough procedure in extracting sperm directly from the testis
          of a male. The procedure is done by insertion of a needle into the
          testis and with the aid of negative pressure, fluid and tissue are
          aspirated. The sample thus obtained undergoes further processing to
          retrieve the sperm cells in a laboratory. In this procedure, the sperm
          cells do not have to necessarily be mature and travel through the
          epididymis in order to fertilize the egg and because the sperms are
          immature, ICSI has to be performed so as to be able to obtain single
          sperm and inject straight away into the egg for further fertilization
          to occur and result in the embryo formation. Both the procedures are
          helpful in treating the male infertility factor, but there are certain
          factors to be taken into consideration before deciding which one is
          ideal for your condition. This is possible only through a fertility
          specialist. Approach the right facility and choose a specialist who
          can efficiently guide you through your journey to reach your
          destination of being a biological father. GarbhaGudi IVF Centre – A
          path from dreams to success.
        </Text>
      </Container>
    </Box>
  );
};

export default Advancements;

const styles = {
  banner: {
    pt: ["20px", null, null, null, "100px", "70px"],
    pb: ["60px", null, null, null, "60px", null, "120"],
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
      maxWidth: ["100%", null, null, "90%", "100%", "full"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
      textAlign: "center",
    },
    h4: {
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "50px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "full"],
      fontSize: [3, null, null, "36px", null, "55px", 6],
      textAlign: "center",
      color: "secondary",
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
      lineHeight: ["26px", null, null, null, 1.5],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "640px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
      h2: {
        fontSize: [3, null, null, 2, null, 6],
        fontWeight: ["bold", null, null, "bold", null, "bold"],
        mb: ["5px", null, null, null, null, "-5px"],
        mt: ["5px", null, null, null, null, "15px"],
      },
    },
  },
  image: {
    img: {
      display: ["block", null, null, "flex"],
      mx: "auto",
      width: "500px",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "100%"],
      float: [null, null, null, "right"],
      my: ["20px", null, null, "60px"],
    },
  },
};
