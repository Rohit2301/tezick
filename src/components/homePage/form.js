import { Button, Paper, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Input from "@mui/material/Input";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import db from "../../fireabse";

export const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventLocation: "",
    amount: "",
    noOfTickets: "",
    noOfTicketSold: "",
    noOfDays: "",
  });
  return (
    <div className="eventFormBg">
      <Paper sx={{ background: "blue" }}>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.2rem",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          {" "}
          Create an event{" "}
        </Typography>
        <FormControl
          onSubmit={async (e) => {
            e.preventDefault();
            await db.collection("event").doc(formData.noOfDays).add({
              title: formData.title,
              description: formData.description,
              eventLocation: formData.eventLocation,
              amount: formData.amount,
              noOfDays: formData.noOfDays,
              noOfTickets: formData.noOfTickets,
              noOfTicketSold: formData.noOfTicketSold,
            });
          }}
        >
          <div style={{ marginTop: "1rem" }}></div>
          <div style={{ margin: "3rem 10rem" }}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              style={{ marginLeft: "2rem", marginRight: "1rem" }}
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              style={{ marginLeft: "2rem", marginRight: "1rem" }}
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Event Location"
              variant="outlined"
              style={{ marginLeft: "2rem", marginRight: "1rem" }}
              value={formData.eventLocation}
              onChange={(e) => {
                setFormData({ ...formData, eventLocation: e.target.value });
              }}
            />
          </div>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
            style={{ marginBottom: "2rem" }}
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              value={formData.amount}
              onChange={(e) => {
                setFormData({ ...formData, amount: e.target.value });
              }}
            >
              Amount
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
            style={{ marginBottom: "2rem" }}
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              value={formData.noOfTickets}
              onChange={(e) => {
                setFormData({ ...formData, noOfTickets: e.target.value });
              }}
            >
              No. of tickets
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
            style={{ marginBottom: "2rem" }}
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              value={formData.noOfTicketSold}
              onChange={(e) => {
                setFormData({ ...formData, noOfTicketSold: e.target.value });
              }}
            >
              No. of tickets Sold
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
            style={{ marginBottom: "2rem" }}
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              value={formData.noOfDays}
              onChange={(e) => {
                setFormData({ ...formData, noOfDays: e.target.value });
              }}
            >
              No. of days
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>

          <div style={{ marginTop: "1rem" }}></div>

          <Button
            variant="contained"
            href="#contained-buttons "
            style={{
              margin: "1rem 40rem",
              width: "10rem",
            }}
            type="submit"
          >
            Create event
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};
