import React from "react";
import { Alert, Box } from "theme-ui";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div>
      <Alert sx={styles.wrapper} role="alert">
        <Box sx={styles.alert}>
          This New Year! Let's bring home a little bundle of priceless joy!{" "}
          <br />
          <Link to="/contact-us">Register Now </Link>
          <br />
        </Box>
      </Alert>
    </div>
  );
};

export default Alerts;

const styles = {
  wrapper: {
    backgroundColor: "secondary",
    borderRadius: 0,
    textAlign: "center",
    a: {
      color: "white",
    },
  },
  alert: {
    mx: "auto",
    fontSize: [14.9, null, null, 17.5],
  },
};
