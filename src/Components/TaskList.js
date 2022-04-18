import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = () => {
  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>WATCHING MOVIES</td>
            <td>50HRS</td>
            <td className="text-between">
              <Button variant="danger">
                <i class="fa-solid fa-trash"></i>
              </Button>
              {"  "}

              <Button variant="warning">
                <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
