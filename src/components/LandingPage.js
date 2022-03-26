import { Link } from "react-router-dom";
import React from "react";
import ticketBg from "../img/mainTicket.jpg";
import Navbar from "./Navbar";

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
        <div className="ticket" style={{ height: "32.6rem", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ height: "56vh", width: "100%" }}>
              <img
                alt="ticket bg"
                src={ticketBg}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                }}
              ></img>
            </div>
            <div
              className="ticketDetails"
              style={{
                width: "100%",
                height: "5vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "20px", marginLeft: "1rem" }}
              >
                001
              </span>
              <span
                className="normalText"
                style={{ fontSize: "20px", marginRight: "1rem" }}
              >
                New Year Party
              </span>
            </div>
            <div
              className="ticketDetails2"
              style={{
                height: "8.5vh",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                className="normalText"
                style={{ fontSize: "20px", marginLeft: "1rem" }}
              >
                Dec 31
              </span>
              <span
                className="normalText"
                style={{ fontSize: "20px", marginRight: "1rem" }}
              >
                Connaught Place
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
