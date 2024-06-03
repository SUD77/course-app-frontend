import { ToastContainer } from "react-toastify";
import "./App.css";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Course from "./components/Course";
import Home from "./components/Home";
import Header from "./components/Header"
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Container>

        <Header></Header>
        <Row>
          <Col md={4}>
           <Menus/>
          </Col>

          <Col md={8}>
            <h2>This is content side</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
