import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import HomePage from "./containers/Home";
import Footer from "./components/Footer";
import Main from "./containers/MainWrapper";

function App() {
  return (
    <>
      <Router>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "376px",
            height: "60vh",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.9)",
          }}
        >
          <Header />
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;

<Header />;
