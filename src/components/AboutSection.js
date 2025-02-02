import { ReactComponent as FeniksLogo } from "../feniks.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";

const AboutSection = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        {
          //Logo feniksa
        }
        <Box
          sx={{
            textAlign: "center",
            marginLeft: "20px",
            marginTop: "20px",
            boxShadow: 24,
            height: "100%",
          }}
        >
          <FeniksLogo style={{ filter: "invert(100%)" }}></FeniksLogo>
        </Box>
      </Grid2>
      <Grid2 size={6}>
        {
          //Sekcja o nas
        }
        <Box
          sx={{
            textAlign: "left",
            marginLeft: "20px",
            marginTop: "20px",
            marginRight: "20px",
            boxShadow: 24,
            height: "100%",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 900 }}>
            Kim jesteśmy?
          </Typography>
          <Typography variant="p">
            Nie mam pomysłu co tutaj napisać więc tak ogólnie to
            alsjdfalkjdfla;ksjdfaksjdf;lasjdfajsd;lfajsdfkjsd;lfajsdfasdfgyafsgkahjgfhjcvnbzcvxkjhagdvkhajgdfljagdsfhagdsa
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};
export default AboutSection;
