import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menus() {
  return (
    <div>
      <ListGroup>
        {/* <ListGroupItem tag="a" href="/" action>
          Home
        </ListGroupItem>
        <ListGroupItem tag="a" href="/add-course" action>
          Add Course
        </ListGroupItem>
        <ListGroupItem tag="a" href="/view-courses" action>
          View Courses
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1" action>
          About
        </ListGroupItem>
        <ListGroupItem tag="a" href="#1" action>
          Contact
        </ListGroupItem> */}

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#1"
          action
        >
          About
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#1"
          action
        >
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
