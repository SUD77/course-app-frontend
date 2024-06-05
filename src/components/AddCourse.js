import React, { Fragment,useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function AddCourse() {

  useEffect(()=>{
    document.title="Add Course";
  },[])

  return (
    <Fragment>
      <h1 className="text-center my-3"> Fill Course Detail</h1>
      <Form>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description here"
            id="description"
            style={{height: 100}}
          />
        </FormGroup>

        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="warning" style={{marginLeft:10}}>Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
