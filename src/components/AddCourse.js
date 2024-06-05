import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  //form handler function
  const handleForm = (e) => {
    console.log(course);
    addCourseToServer(course);
    e.preventDefault();
  };


  //Creating a function to post data on server
  const addCourseToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("Success");
      },
      (error)=>{
        console.log(error);
        console.log("error");
      }
    )
  };

  return (
    <Fragment>
      <h1 className="text-center my-3"> Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button color="warning" style={{ marginLeft: 10 }}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
