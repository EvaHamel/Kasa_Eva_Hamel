import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createGlobalStyle } from "styled-components";
import APropos from "./pages/APropos";
import styled from "styled-components";
import FicheLogement from "./pages/FicheLogement";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`;

const AppContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <AppContent>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/fichelogement/:idFiche" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContent>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
