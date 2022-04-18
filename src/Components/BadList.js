import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const BadList = () => {
  return (
    <div>
      <h2 className="text-center">Bad List</h2>
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
              <Button variant="success">
                <i class="fa-solid fa-arrow-left"></i>
              </Button>
              {"  "}
              <Button variant="danger">
                <i class="fa-solid fa-trash"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className="mt-4 text-danger">You could have saved: 20hrs</h4>
    </div>
  );
};
