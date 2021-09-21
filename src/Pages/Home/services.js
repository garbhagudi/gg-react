/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "Components/section-heading";
import Service from "Components/cards/service";
import icon1 from "assets/images/icons/service4.png";
import icon2 from "assets/images/icons/service2.png";
import icon3 from "assets/images/icons/service3.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Top Fertility Specialists ",
    description: `Our staff consists of infertility specialists like Gynecologists, Embryologists, Technicians.`,
  },
  {
    id: 3,
    icon: icon2,
    title: "High Success Rates",
    description: `We have one of the highest success rates in the industry - over 66%`,
  },
  {
    id: 4,
    icon: icon3,
    title: "Affordable Care",
    description: `We offer affordable treatments without any compromise on service, medicines or media.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Experience the Joy only children can bring."
          description="We have helped more than 6750 Couples experience the joy of parenthood."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
