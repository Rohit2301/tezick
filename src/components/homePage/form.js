import { Button, Paper, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const EventForm = () => {
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
        <div style={{ marginTop: "1rem" }}></div>
        <div style={{ margin: "3rem 10rem" }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            style={{ marginLeft: "2rem", marginRight: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            style={{ marginLeft: "2rem", marginRight: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Event Location"
            variant="outlined"
            style={{ marginLeft: "2rem", marginRight: "1rem" }}
          />
        </div>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          style={{ marginBottom: "2rem" }}
        >
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          style={{ marginBottom: "2rem" }}
        >
          <InputLabel htmlFor="standard-adornment-amount">
            No. of tickets
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          style={{ marginBottom: "2rem" }}
        >
          <InputLabel htmlFor="standard-adornment-amount">
            No. of tickets Sold
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          style={{ marginBottom: "2rem" }}
        >
          <InputLabel htmlFor="standard-adornment-amount">
            No. of days
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
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
        >
          Create event
        </Button>
      </Paper>
    </div>
  );
};
