import React, { useState,useEffect } from "react";
import Course from "./Course";

function AllCourses() {

  useEffect(()=>{
    document.title="All Courses";
  },[])

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
        courses.length > 0 ? courses.map((item) => <Course course={item} /> ) : "No Courses"
      }
    </div>
  );
}

export default AllCourses;
