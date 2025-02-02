import { ReactComponent as FeniksLogo } from "../feniks.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import OpinionForm from "./OpinionForm";

const AboutSection = () => {
  let display = 'block';
  if (window.innerWidth < 780) {
    display = 'none';
  }
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        {
          // Panel z postami
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
          { /*<FeniksLogo style={{ filter: "invert(100%)" }}></FeniksLogo>*/ }
          <OpinionForm />
        </Box>
      </Grid2>
      <Grid2 size={6} sx={{display: display}}>
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
          <Typography variant="h2" sx={{ fontWeight: 900, marginLeft: '15px', marginTop: '15px' }}>
            Dlaczego powstała ta strona?
          </Typography>
          <Typography variant="p" sx={{marginLeft: '15px', marginTop: '15px', fontSize: '20px', fontWeight: 900}}>
          Jesteśmy drużyną wielopoziomową, zrzeszającą harcerzy starszych i wędrowników. Działamy według dewizy wędrowniczej, co oznacza, że naszym celem jest naprawianie świata poprzez świadome działania ukierunkowane na pomoc innym, w dowolnym stopniu – od pojedynczej osoby do całej społeczności. Ten projekt ma jednak na celu docenienie tych, którzy często robią to dużo dłużej od nas i na znacznie większą skalę, czyli pracowników komunikacji miejskiej, którzy swoimi codziennymi działaniami ułatwiają życie wszystkim mieszkańcom Warszawy. A w jaki sposób to robią? Przeczytaj o tym w sekcji z komentarzami, albo dodaj swój, jeżeli również chciałabyś/chciałbyś wyrazić swoją wdzięczność! Może dzięki komunikacji docierasz do pracy wyjątkowo szybko? A może chcesz pozdrowić ulubionego kierowcę autobusu? Albo masz miłe wspomnienie związane z konkretnym przystankiem? Koniecznie podziel się tym na tej stronie!
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'right'}}>~ 234 WDW "Feniks"</Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};
export default AboutSection;
