import { Button, Paper, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const EventForm = () => {
  return (
    <Paper>
      <Typography variant="h6"> Create an event </Typography>
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      <TextField id="outlined-basic" label="Discriptioin" variant="outlined" />
      <TextField id="outlined-basic" label="Seats" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Event Location"
        variant="outlined"
      />
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Timestamp</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">
          No. of tickets
        </InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">
          No. os tickets Sold
        </InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Link to join events for attendees"
        variant="outlined"
      />

      <div></div>

      <Button variant="contained" href="#contained-buttons">
        Create event
      </Button>
    </Paper>
  );
};
