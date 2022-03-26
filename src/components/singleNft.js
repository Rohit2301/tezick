import React from "react";
import ticketBg from "../img/mainTicket.jpg";

const SingleNft = () => {
  return (
    <div className="ticket" style={{ height: "32.6rem", width: "25%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
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
  );
};

export default SingleNft;
