import React from "react";
import { Alert, Box } from "theme-ui";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div>
      <Alert sx={styles.wrapper} role="alert">
        <Box sx={styles.alert}>
          Paripoorna | Get upto ₹30,000 off IVF Treatment
          <br />
          <Link to="/paripoorna">Avail Benefit </Link>
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
    fontSize: [13.9, null, null, 17.5],
  },
};
