import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";




function Course({course,update}) {

  //making delete 
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Deleted");
        update(id);

      },
      (error)=>{
        toast.error("Couldnt be deleted");
      }
    )
  }




  return (
    <Card  className="text-center">
      <CardBody>
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" onClick={()=>{
            deleteCourse(course.id);
          }}>Delete</Button>
          <Button color="warning" style={{marginLeft:10}}>Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
