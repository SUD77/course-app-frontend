import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menus() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag="a" href="#1">
          Home
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1">
          Add Course
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1">
          View Courses
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1">
          About
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1">
          Contact
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Menus;
