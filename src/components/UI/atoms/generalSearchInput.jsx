import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function GeneralSearchInput(props) {
  return (
    <FormControl
      fullWidth
      sx={{ m: 1, padding: "0px", alignContent: "center" }}
    >
      <InputLabel htmlFor="outlined-adornment-amount">Buscar</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.search}
        onChange={(e) => props.getSearchValue(e.target.value)}
        endAdornment={<InputAdornment position="start">🔍︎</InputAdornment>}
        label="Buscar"
      />
    </FormControl>
  );
}
