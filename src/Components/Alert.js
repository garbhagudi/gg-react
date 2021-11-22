import React from "react";
import { Alert, Box } from "theme-ui";
import Count from "Components/countdown/Clock";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div>
      <Alert sx={styles.wrapper} role="alert">
        <Box sx={styles.alert}>
          Paripoorna offer is valid till January 1st 2022,
          <br />
          <span>
            <Count />
          </span>
        </Box>
        <Link to="/demo/paripoorna">Know More {">"}</Link>
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
    fontSize: [1, null, null, 14.5],
  },
};
