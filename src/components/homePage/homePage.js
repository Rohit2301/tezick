import React from "react";
import Navbar from "../Navbar";

const HomePage = () => {
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
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span
          className="normalText"
          style={{ fontSize: "150px", marginBottom: "1rem" }}
        >
          TezTick
        </span>
        <div
          className="outlineButton"
          style={{ width: "20rem", height: "4rem" }}
        >
          <span style={{ fontSize: "24px" }}>Create Event</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            justifyContent: "start",
            marginTop: "2rem",
          }}
        >
          <EventDiv></EventDiv>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const EventDiv = () => {
  return (
    <div
      className="eventDiv"
      style={{ width: "18rem", height: "18rem", padding: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            margin: "0.5rem 0rem"
          }}
        >
          <span className="normalText" style={{ fontSize: "16px" }}>
            Event Time :
          </span>
          <span className="normalText" style={{ fontSize: "20px", marginLeft: "1rem" }}>
            31 December
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            margin: "0.5rem 0rem"
          }}
        >
          <span className="normalText" style={{ fontSize: "16px" }}>
            Event Place :
          </span>
          <span className="normalText" style={{ fontSize: "20px", marginLeft: "1rem" }}>
            Connaught Place
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            margin: "0.5rem 0rem"
          }}
        >
          <span className="normalText" style={{ fontSize: "16px" }}>
            Event Name :
          </span>
          <span className="normalText" style={{ fontSize: "20px", marginLeft: "1rem" }}>
            New Year Party
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            margin: "0.5rem 0rem"
          }}
        >
          <span className="normalText" style={{ fontSize: "16px" }}>
            Creator :
          </span>
          <span className="normalText" style={{ fontSize: "20px", marginLeft: "1rem" }}>
            0xjdhasjdjajd
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            margin: "0.5rem 0rem"
          }}
        >
          <span className="normalText" style={{ fontSize: "16px" }}>
            Tickets Sold :
          </span>
          <span className="normalText" style={{ fontSize: "20px", marginLeft: "1rem" }}>
            2/60
          </span>
        </div>
        <div className="outlineButton" style={{width: "8rem", height: "2rem", marginTop: "2rem"}}>
        <span style={{ fontSize: "18px" }}>Buy Ticket</span>
        </div>
        
      </div>
    </div>
  );
};
