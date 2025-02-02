import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import AdminPage from "./components/AdminPage";
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
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
