import { ToastContainer } from "react-toastify";
import "./App.css";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Home from "./components/Home";
import Header from "./components/Header";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header></Header>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
