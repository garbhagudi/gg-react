/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Button } from "theme-ui";

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        <Button variant="white">
          <a href={member?.link} target="_blank" rel="noreferrer">
            Book an Appointment
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  about: {
    mt: [4],
    textAlign: ["center", null, null, "center"],
    h3: {
      color: "heading",
      fontFamily: "body",
      fontSize: [3, null, null, 4],
    },
    p: {
      color: "#555",
      letterSpacing: "-0.2px",
      mt: [2],
      fontWeight: "bold",
    },
    a: {
      color: "white",
      fontWeight: "bold",
      textDecoration: "none",
      border: "2px solid",
      bg: "secondary",
      px: "15px",
      py: "10px",
      borderRadius: "8px",
      "&:hover": {
        bg: "secondary",
        color: "white",
        border: "white",
      },
    },
  },
};
