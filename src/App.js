import React from "react";
import { EventForm } from "./components/homePage/form";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/homePage/homePage";
import YourNft from "./components/YourNft";
import { Route, Routes } from "react-router-dom";
import SingleNft from "./components/singleNft";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <EventForm /> */}
      {/* <HomePage/> */}
      {/* <YourNft/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/home-page" element={<HomePage />}></Route>
        <Route exact path="/create-event" element={<EventForm />}></Route>
        <Route exact path="/nft-minting" element={<YourNft />}></Route>
      </Routes>
      {/* <LandingPage /> */}
      {/* <EventForm /> */}
      {/* <HomePage/> */}
      {/* <SingleNft /> */}
    </div>
  );
}

export default App;
