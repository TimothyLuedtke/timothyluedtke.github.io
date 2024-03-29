import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-scroll";
// Data
// import { resume } from "../data";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { FixedNavSpacer, ToggleSwitch } from "./globalStyledComponents";
// Images
// import Logo from "../images/logo.svg";

export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            {/* <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top bg-dark rounded-circle nav-logo"
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to={"Home"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"About"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  About Me
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Projects"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Contact"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Contact
                </Link>
              </Nav.Item>
              {/* <Nav.Item>
                {resume && (
                  // <a
                  //   href={resume}
                  //   target="_blank"
                  //   rel="noreferrer"
                  //   onClick={closeExpanded}
                  // >
                    <Button
                    href={resume}
                      target="_blank"
                      onClick={closeExpanded}
                      size="sm"
                      variant={theme === "light" ? "outline-dark" : "outline-light"}
                      className="mt-2"
                    >
                      Resum&eacute;
                    </Button>
                  // </a>
                )}
              </Nav.Item> */}
            </Nav>
            <Nav>
              <ToggleSwitch />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
