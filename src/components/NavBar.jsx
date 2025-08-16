import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import "../css/Navbar.css"; // Assuming you have a CSS file for Navbar styles"

function Navigation() {
  return (
    <div className="navbar-container">
    <Navbar>  
        <NavbarContent className="navbar-content" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/favorites">
              Favorites
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/watchlater">
              Watch Later
            </Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
    </div>
  );
}

export default Navigation;
