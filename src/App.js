import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Container from "./components/Container"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
            <Route
              exact
              path="/"
              element={<Login key="/"></Login>}
            ></Route>
            <Route
              exact
              path="/home"
              element={<Container key="home"></Container>}
            ></Route>
            <Route
              exact
              path="/jewelery"
              element={
                <Container key="jewelery" category="jewelery"></Container>
              }
            ></Route>
            <Route
              exact
              path="/electronics"
              element={
                <Container key="electronics" category="electronics"></Container>
              }
            ></Route>
            <Route
              exact
              path="men clothing"
              element={
                <Container
                  key="men clothing"
                  category="men's clothing"
                ></Container>
              }
            ></Route>
            <Route
              exact
              path="/women clothing"
              element={
                <Container
                  key="women clothing"
                  category="women's clothing"
                ></Container>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={<Login key="log in"></Login>}
            ></Route>
            <Route
              exact
              path="/register"
              element={<Register key="sign up"></Register>}
            ></Route>
          </Routes>

        <Footer></Footer>

      </ThemeProvider>
    </>
  );
}

export default App;