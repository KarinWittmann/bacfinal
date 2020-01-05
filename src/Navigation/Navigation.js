import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="nav123">
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/">
              Game-Panel
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/selectdog">
              Select Dog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav2" to="/scores">
              Scores
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link className="nav0" as={NavLink} to="/LoginForm">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
