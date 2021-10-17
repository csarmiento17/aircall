import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TopNav from "./components/TopNavigation"
import AllCalls from "./pages/AllCalls"
import HomePage from "./pages/Inbox";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "376px",
            height: "666px",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.9)",
            overflowY:"scroll"
          }}
        >
          <TopNav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/allcalls" component={AllCalls} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;

