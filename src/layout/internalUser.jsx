import React from "react";
import Navbar from "../components/UI/organisms/navbar";
import Container from "@mui/material/Container";

export default function InternalUser(props) {
  return (
    <Container maxWidth='xl' fixed disableGutters>
      <Navbar search={props.search} getSearchValue={props.getSearchValue} />
    </Container>
  );
}
