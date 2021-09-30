/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Masonry from "react-masonry-component";
import SectionHeading from "Components/section-heading";
import BlogPost from "Components/cards/blog-post";
import thumb1 from "assets/images/blog/1.webp";
import thumb2 from "assets/images/blog/2.webp";
import thumb3 from "assets/images/blog/3.webp";
import thumb4 from "assets/images/blog/4.webp";

const data = [
  {
    id: 1,
    link: "https://garbhagudi.com/do-birth-control-pills-cause-infertility-in-the-future/",
    thumbnail: thumb1,
    showDescription: true,
    title: `Do birth control pills cause infertility in the future?`,
    description: `The new medical advances of effective birth control have transformed and allowed women to take control of their own destinies and given the women the liberty to enjoy personal freedom and postpone their pregnancy which was not possible for the previous generations`,
  },
  {
    id: 2,
    link: "https://garbhagudi.com/best-ivf-fertility-hospital-in-india/",
    thumbnail: null,
    showDescription: false,
    title: `GarbhaGudi Recognised as Best IVF & Fertility Hospital in India`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 3,
    link: "https://garbhagudi.com/safe-parenthood-donor-insemination/",
    thumbnail: thumb3,
    showDescription: true,
    title: `Safe Parenthood with Donor Insemination?`,
    description: `“Let New Hopes & Not Your Hurts Decide Your Path to Parenthood!” `,
  },
  {
    id: 4,
    link: "https://garbhagudi.com/how-does-egg-freezing-work-and-its-benefits/",
    thumbnail: thumb2,
    showDescription: true,
    title: `How does egg freezing work? and what are its benefits?`,
    description: `Parenthood is a dream every couple would sooner or later want to turn into a reality.`,
  },
  {
    id: 5,
    link: "https://garbhagudi.com/fertility-and-nutrition/",
    thumbnail: thumb4,
    showDescription: false,
    title: `Fertility And Nutrition`,
    description: `An investment in good nutrition yields the best interest – A healthy life. Your food could be your medicine and your medicine could be your food. What you choose to eat is what you want to become.`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Blogs"
          description="Fertility, Pregnency & Sexual health blogs from our Fertility Experts"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: "relative",
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
