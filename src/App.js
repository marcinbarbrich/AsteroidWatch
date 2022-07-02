import React from "react";
import AppBody from "./components/AppBody";
import Header from "./components/Header";
import Title from "./components/Title";
import { ReactComponent as Asteroid } from "./asteroidIcon.svg";
import Navigation from "./components/Navigation";
import Search from "./Search";
import Container from "./Container";
import NEO from "./components/NEOs";
import StartPage from "./components/StartPage";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState("start");

  console.log(state);

  const renderSwitch = (param) => {
    switch (param) {
      case "start":
        return <StartPage />;
      case "near earth objects":
        return <NEO />;
      case "search asteroids":
        return <Search />;
      default:
    }
  };

  return (
    <AppBody>
      <Header>
        <Container flex spaceBetween center>
          <Title href="/">
            <Asteroid
              fill="white"
              style={{
                width: "auto",
                height: "40px",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            Asteroid watch
          </Title>
          <Navigation onItemClick={(item) => setState(item)} />
        </Container>
      </Header>
      {renderSwitch(state)}
    </AppBody>
  );
};

export default App;
