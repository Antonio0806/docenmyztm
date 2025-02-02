import * as React from "react";
import TopMenu from "./TopMenu";
import Grid2 from "@mui/material/Grid2";
import AboutSection from "./AboutSection";
import OpinionTable from "./OpinionTable";
const MainContainer = () => {
  return (
    <>
      <TopMenu />
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          {
            //Sekcja o drużynie, kim jesteśmy itp.
          }
          <AboutSection />
        </Grid2>
        <Grid2 size={12}>
          {
            //Tableka z opiniami zatwierdzonymi
          }
          <OpinionTable />
        </Grid2>
      </Grid2>
    </>
  );
};

export default MainContainer;
