import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./Components/AddForm";
import { BadList } from "./Components/BadList";
import { TaskList } from "./Components/TaskList";
import { Title } from "./Components/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/* Title component */}
        <Title />
        {/* addform compnent */}
        <AddForm />
        <Row>
          <Col md={6}>
            <TaskList />
          </Col>
          <Col md={6}>
            <BadList />
          </Col>
        </Row>
        {/* total hours allocation */}
        <Row>
          <Col>
            <h3 className="mt-5"> The total hours allocatd is: 15 hrs</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
