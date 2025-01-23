import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navbar.css";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-auto">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <img
                alt="Any.do logo"
                loading="lazy"
                width="118"
                height="32"
                style={{ color: "transparent", padding: "2px" }}
                src="header-logo.webp"
              />
            </Nav.Link>

            <NavDropdown
              title="Meet Any.do"
              id="navbarScrollingDropdown"
              style={{ color: "transparent", padding: "2px" }}
            >
              <NavDropdown.Item href="#action3">
                To-do list & Tasks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Daily Planner</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Reminders</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chat & Collaborations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Integrations</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Imports</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Solutions"
              id="navbarScrollingDropdown"
              style={{ color: "transparent", padding: "2px" }}
            >
              <NavDropdown.Item href="#action3">
                To-do list & Tasks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Daily Planner</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Reminders</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chat & Collaborations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Integrations</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Imports</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="navbarScrollingDropdown"
              style={{ color: "transparent", padding: "2px" }}
            >
              <NavDropdown.Item href="#action3">
                To-do list & Tasks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Daily Planner</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Reminders</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chat & Collaborations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Integrations</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Imports</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Download"
              id="navbarScrollingDropdown"
              style={{ color: "transparent", padding: "2px" }}
            >
              <NavDropdown.Item href="#action3">
                To-do list & Tasks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Daily Planner</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Reminders</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Chat & Collaborations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Integrations</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Imports</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Contact Sales</Nav.Link>
            <Button
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                float: "right",
              }}
              variant="outline-primary"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
