/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from "react";
import { jsx, Box, Container, Image } from "theme-ui";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "Components/section-heading";
import TeamMember from "Components/cards/team-member";

import avatar1 from "assets/images/team/member1.webp";
import avatar2 from "assets/images/team/member2.webp";
import avatar3 from "assets/images/team/member3.webp";
import avatar4 from "assets/images/team/member4.webp";
import avatar5 from "assets/images/team/member5.webp";
import avatar6 from "assets/images/team/member6.webp";
import avatar7 from "assets/images/team/member7.webp";
import avatar8 from "assets/images/team/member8.webp";
import avatar9 from "assets/images/team/member9.webp";

import arrowRight from "assets/images/icons/arrow-right.png";

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: "Dr Asha S Vijay",
    designation: "Founder & Medical Director",
    branch: "Hanumanthanagar & South End Circle",
    link: "https://garbhagudi.com/dr-asha-s-vijay-profile",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Dr Chaithra S.K",
    designation: "Senior Fertility Specialist",
    branch: "Kalyan Nagar & Marathahalli",
    link: "https://garbhagudi.com/dr-chaitra-s-k/",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Dr Sophia Keisham Devi",
    designation: "Senior Fertility Specialist",
    branch: "Electronic City",
    link: "https://garbhagudi.com/dr-sophia-devi/",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Dr Maheshwari M",
    designation: "Senior Fertility Specialist",
    link: "https://garbhagudi.com/dr-maheshwari/",
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Dr Chinmayie R",
    designation: "Fertility Specialist",
    link: "https://garbhagudi.com/dr-chinmayie-r",
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Dr Swetha V",
    designation: "Fertility Specialist",
    link: "https://garbhagudi.com/dr-swetha-v",
  },
  {
    id: 7,
    avatar: avatar7,
    name: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    link: "https://garbhagudi.com/dr-priyanka-rani",
  },
  {
    id: 8,
    avatar: avatar8,
    name: "Dr Anitha A Manoj",
    designation: "Fertility Specialist",
    link: "https://garbhagudi.com/dr-anitha-a-manoj/",
  },
  {
    id: 9,
    avatar: avatar9,
    name: "Dr Vandana Ramanath",
    designation: "Fertility Specialist",
    link: "https://garbhagudi.com/dr-vandana-ramanathan/",
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet our superheros"
          description=" Team of fertility specialists like gynecologists, embryologists, technicians and staff to help conceive "
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: "10px auto 0",
    },
  },
  teamWrapper: {
    position: "relative",
    pl: [6],
    pr: [6, null, null, 0],
    transition: "0.3s ease-in-out 0s",
    ".swiper-arrow": {
      backgroundColor: "#fff",
      border: 0,
      cursor: "pointer",
      padding: 0,
      display: "flex",
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 7px 14px rgba(25, 60, 101, 0.06)",
      borderRadius: "50%",
      position: "absolute",
      zIndex: 2,
      top: "calc(50% - 40px)",
      transform: "translateY(-50%)",
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, "100%"],
      },
    },
    ".swiper-arrow-left": {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: "rotate(180deg)",
        marginLeft: "-4px",
      },
    },
    ".swiper-arrow-right": {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: "-4px",
      },
    },
  },
};
