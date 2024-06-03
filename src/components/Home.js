import React from "react";
import { Button, Container } from "reactstrap";

function Home() {
  return (
    <div className="jumbotron text-center">
      <h1>LearnCode with Sudhanshu</h1>
      <p>This is developed by Sudhanshu Jaiswal for learning purpose. </p>
      <Container>
        <Button outline color="primary">Start Using</Button>
      </Container>
    </div>
  );
}

export default Home;
