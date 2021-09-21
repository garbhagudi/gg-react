/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import { rgba } from "polished";
import quote from "assets/images/icons/quote.png";
import facebook from "assets/images/logos/facebook.webp";
import google from "assets/images/logos/google.webp";
import justdial from "assets/images/logos/justdial.webp";
import practo from "assets/images/logos/practo.webp";
import whatclinic from "assets/images/logos/whatclinic.webp";

const data = [
  {
    id: 1,
    logo: whatclinic,
    author: "By Anees, on WhatClinic",
    quote: `Doctor Chaitra was very helpful and explained every bit very clearly, and sisters were also very helpful, I was happy going to GarbhaGudi, they have explained about the treatment and cost for it, I have to decide and get back to them.”`,
  },
  {
    id: 2,
    logo: practo,
    author: "By Sushant Rajapure, on Practo",
    quote: `“We had great experience with Dr. Sophia and all staff at Garbhagudi, ECity. Everyone are extremely professional, helpful. Doctor was very clear on the treatment course to be taken and process. She is very focused, closely follows the treatment, its consequences, quickly changes medicines depending upon the results. We have received our biggest news in the first attempt itself. All this was done during initial COVID times. Complete staff cleanliness, follow-up of COVID protocols was an added advantage. Strongly recommend Dr. Sophia and Garbhagudi, Ecity centre!!!”`,
  },
  {
    id: 3,
    logo: justdial,
    author: "By Eeswari Nersu, on JustDial",
    quote: `“Hi friends! I would like to share my experience about Garbhagudi Hospital Hanumnatha Nagar & Kalyan Nagar, Bangalore. This is a best hospital for childless couple. We took treatment in so many places before visiting Garbhagudi hospital and we lost hope to have child. We Visited Hanumantha Nagar hospital to meet, Dr. Asha & Dr. Maheswari and they gave us hope and treated with very care. We succeeded in first attempt of IVF and now we are very happy. We visited Kalyan Nagra Dr.Chitra Madam after conceiving and she gave good treatment. If you want best results, please visit this hospital.”`,
  },
  {
    id: 4,
    logo: google,
    author: "By Kumar Salunke, on Google",
    quote: `“We are feeling so happy and blessed to knew about this place and its amazing hospital with fabulous doctor and staff. Thank you so much to Dr Chinmayie mam and all the staff members and team. They are very caring and treated very well and all the staff are well behaved. All the test results are accurate and helpful to know the issue and starts treatment within no time. A big thank you to all”`,
  },
  {
    id: 5,
    logo: facebook,
    author: "By Rammurthi, on Facebook",
    quote: `“Very well organized hospital with well-trained experts who guide you throughout the process and explain things in detail!  Affordable prices and treatments at its best! Qualitative services! Would recommend this place for best IVF treatments”`,
  },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={
                <Image src={item.logo} alt="logo" style={{ width: "120px" }} />
              }
            >
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ["column-reverse", null, null, null, null, "column"],
    ".rc-tabs-nav": {
      mt: [8, null, null, 9, 11],
    },
    ".rc-tabs-nav-wrap": {
      borderTop: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center",
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      // m: ['0 45px'],
    },
    ".rc-tabs-tab-btn": {
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, "80%", "100%"],
        m: ["0 auto"],
      },
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      pt: [4, null, null, 7, 9],
    },
    ".rc-tabs-tabpane": {
      outline: 0,
      blockquote: {
        fontFamily: "heading",
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: "relative",
        maxWidth: 846,
        margin: "0px auto",
        pt: ["12px", null, null, "17px", "13px"],
        pl: [35, 35, 35, 10, 11],
        ":before": {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: "absolute",
          width: 128,
          height: 43,
          left: ["-31px", null, null, "-16px", "-7px", 0],
          top: ["1px", "1px", "1px", 0],
          backgroundSize: ["75%", null, null, "100%"],
        },
      },
      span: {
        color: "#7E8896",
        fontFamily: "body",
        display: "flex",
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    ".rc-tabs-ink-bar": {
      top: 0,
      height: 2,
      backgroundColor: "#A17857",
      borderRadius: 5,
    },
  },
};
