import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {

  useEffect(()=>{
    document.title="All Courses";
  },[])


  //Function to call server
  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Courses loaded");
      },
      (error)=>{
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };


  //calling loading course function
  // in useEffect, we use [], so that, useEffect is not called everysingle we click on the component. Read about it. 
  useEffect(()=>{
    // console.log("useEffect called");
    getAllCoursesFromServer();
  },[]);

  const [courses, setCourses] = useState([
    { title: "java Cousrse", description: "Tis is a demo course" },
    { title: "java Cousrse", description: "Tis is a demo course" },
    { title: "java Cousrse", description: "Tis is a demo course" },
  ]);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses are as follows </p>

      {
        courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} /> ) : "No Courses"
      }
    </div>
  );
}

export default AllCourses;
