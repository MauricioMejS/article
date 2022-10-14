import Search from "../atoms/generalSearchInput";
import Container from "@mui/material/Container";

export default function Navbar(props) {
  return (
    <Container maxWidth='xl' fixed disableGutters>
      <header className="App-header">
        <Search search={props.search} getSearchValue={props.getSearchValue} />
      </header>
    </Container>
  );
}
