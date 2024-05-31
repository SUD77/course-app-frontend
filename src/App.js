import "./App.css";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Course from "./components/Course";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <AllCourses />
      <AddCourse />
    </div>
  );
}

export default App;
