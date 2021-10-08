import React, { useState } from "react";
import { Container, Box, Heading } from "theme-ui";
import { Link } from "Components/link";
import { FaPlay } from "react-icons/fa";

import loadable from "@loadable/component";
import videoImg from "assets/images/ivffromhome-thumb.webp";
const Image = loadable(() => import("Components/image"));
const ModalVideo = loadable(() => import("react-modal-video"));

const VideoTwo = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" sx={styles.video} id="intro">
      <Container>
        <Heading as="h3">IVF & IUI From Home ? Is it really Possible?</Heading>
        <Box sx={styles.videoBox}>
          <Image src={videoImg} alt="testimonial video" />
          <Link
            path="/"
            aria-label="video btn"
            onClick={handleClick}
            sx={styles.videoBtn}
          >
            <FaPlay />
          </Link>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="q-NWGcN89as"
        onClose={() => setVideoOpen(false)}
      />
    </Box>
  );
};

export default VideoTwo;

const styles = {
  video: {
    pt: [null, null, null, null, null, 30],
    textAlign: "center",
    h3: {
      mb: 8,
      fontSize: [5, null, null, "21px", "36px", "32px", 9],
      letterSpacing: ["-0.5px", null, null, null, null, "-1.5px"],
      fontWeight: "bold",
      lineHeight: [1.6, null, null, 1.25],
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      lineHeight: ["26px", null, null, 2],
      mt: ["10px", null, null, null, "25px"],
      mb: ["0px", null, null, null, "20px"],
    },
    br: {
      display: ["none", null, null, "inherit"],
    },
  },
  videoBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ">img": {
      display: "flex",
      width: ["100%", null, null, null, "80%", null, "100%"],
      border: "solid",
      borderColor: "borderColor",
      borderRadius: "10px",
      borderWidth: "2px",
    },
  },
  link: {
    color: "secondary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    mt: ["15px", null, null, null, "0px"],
    mb: ["20px", null, null, "50px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  videoBtn: {
    width: [44, null, 44, 66, 120],
    height: [44, null, 44, 66, 120],
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transition: "500ms ease",
    svg: {
      fontSize: ["15px", null, "15px", null, "22px", "35px"],
      color: ["secondary"],
    },
    "&:hover": {
      backgroundColor: "secondary",
      svg: {
        color: "#fff",
      },
    },
  },
};
