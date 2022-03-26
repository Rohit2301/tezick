import { Link } from "react-router-dom";
import React from "react";
import ticketBg from "../img/mainTicket.jpg";
import Navbar from "./Navbar";
import SingleNft from "./singleNft"

const LandingPage = () => {
  return (
    <div
      className="mainBg"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar></Navbar>
      
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "90%",
          padding: "3rem",
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "50%",
          }}
        >
          <span className="normalText" style={{ fontSize: "100px" }}>
            TezTick
          </span>
          <span className="normalText" style={{ fontSize: "40px" }}>
            Your one way to your Favourite Event
          </span>
          <Link to="/home-page" style={{textDecoration: "none"}}>
            <div
              className="outlineButton"
              style={{
                width: "15rem",
                height: "4rem",
                marginTop: "2rem",
              }}
            >
              <span style={{ fontSize: "24px" }}>Enter DApp</span>
            </div>
          </Link>
        </div>
        <SingleNft/>
      </div>
    </div>
  );
};

export default LandingPage;
