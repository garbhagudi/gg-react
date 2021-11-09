import Header from "Components/header/HeaderTechnicals/header";
import React from "react";
import { Box } from "theme-ui";

const Form = () => {
  return (
    <div>
      <Header />
      <Box sx={style.formBox}>
        <iframe
          src="./contact-us.html"
          frameborder="0"
          title="form"
          width="460px"
          height="500px"
          style={{
            marginTop: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}
        ></iframe>
      </Box>
    </div>
  );
};

export default Form;

const style = {
  formBox: {
    display: ["block", null, null, "flex"],
    position: "relative",
  },
};
