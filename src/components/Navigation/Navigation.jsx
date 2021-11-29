import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button>Homepage</Button>
        </NavLink>
        <NavLink to="/movies" style={{ textDecoration: "none" }}>
          <Button>Movies</Button>
        </NavLink>
      </>
    </ButtonGroup>
  );
};

export default NavBar;
