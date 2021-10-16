/** @jsxRuntime classic **/
/** @jsx jsx **/
import { jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import loadable from "@loadable/component";
const SectionHeader = loadable(() => import("Components/section-heading"));
const TeamCard = loadable(() => import("Components/cards/team-member"));

const data = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member1_kboo9r.webp",
    altText: "Dr Asha S Vijay",
    title: "Dr Asha S Vijay",
    designation: "Founder & Medical Director",
    website: "https://garbhagudi.com/dr-asha-s-vijay-profile",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member2_vd7of5.webp",
    altText: "Dr Chaithra S.K",
    title: "Dr Chaithra S.K",
    designation: "Senior Ferility Specialist",
    website: "https://garbhagudi.com/dr-chaitra-s-k",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780867/garbhagudi-ivf/Images%20/member4_hd1mpx.webp",
    altText: "Dr Maheshwari M",
    title: "Dr Maheshwari M",
    designation: "Senior Ferility Specialist",
    website: "https://garbhagudi.com/dr-maheshwari",
  },
  {
    id: 4,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member5_irwdpd.webp",
    altText: "Dr Chinmayie R",
    title: "Dr Chinmayie R",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-chinmayie-r",
  },
  {
    id: 5,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member6_rrjqnv.webp",
    altText: "Dr Swetha V",
    title: "Dr Swetha V",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-swetha-v",
  },
  {
    id: 6,
    imgSrc:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780868/garbhagudi-ivf/Images%20/member7_zys2om.webp",
    altText: "Dr Priyanka Rani",
    title: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-priyanka-rani",
  },
];

export default function TeamSection() {
  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container>
        <SectionHeader
          sx={styles.header}
          title="Meet our Superheroes"
          description="Our team of Fertility Specialists have been recognized for their extensive clinical experience and research contributions, as well as for their success in treating the most challenging fertility cases."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              website={item.website}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: "#FFF",
    pt: [5, null, null, 9, null, 10, 8],
    pb: [0, null, null, 5],
  },
  grid: {
    pb: [3, 9, 9, 12, 12, 3],
    mt: [0, null, -6, null, -4],
    gridGap: ["15px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
  header: {
    maxWidth: "600px",
  },
};
