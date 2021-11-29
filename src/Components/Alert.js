import React from "react";
import { Alert, Box } from "theme-ui";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div>
      <Alert sx={styles.wrapper} role="alert">
        <Box sx={styles.alert}>
          PARIPOORNA - avail upto* 50% on IVF Treatments. <br />
          <Link to="/contact-us">Register Now </Link> &emsp; | &emsp;
          <Link to="/paripoorna">Know More</Link>
          <br />
        </Box>
      </Alert>
    </div>
  );
};

export default Alerts;

const styles = {
  wrapper: {
    backgroundColor: "#a87b9e",
    borderRadius: 0,
    textAlign: "center",
    a: {
      color: "white",
    },
  },
  alert: {
    mx: "auto",
    fontSize: [1, null, null, 14.5],
  },
};
