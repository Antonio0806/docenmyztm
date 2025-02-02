import * as React from "react";
import TopMenu from "./components/TopMenu";
import Grid2 from "@mui/material/Grid2";
import OpinionForm from "./components/OpinionForm";
import AboutSection from "./components/AboutSection";
import OpinionTable from "./components/OpinionTable";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  /*
   *   Maraton długu technicznego
  */
  const darkTheme = createTheme({
    palette: {
      mode: "dark",

      topbar: {
        main: "#550278",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TopMenu />
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            {
              //Sekcja o drużynie, kim jesteśmy itp.
            }
            <AboutSection/>
          </Grid2>
          <Grid2 size={12}>
            {
              //Tableka z opiniami zatwierdzonymi
            }
            <OpinionTable />
          </Grid2>
          <Grid2 size={12} sx={{ textAlign: "center" }}>
            {
              //Formularz do dodania swojej opinii
            }
            <OpinionForm/>
          </Grid2>
        </Grid2>
      </ThemeProvider>
    </>
  );
}

export default App;
