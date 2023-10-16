import React from "react";
import Table from "react-bootstrap/Table";
import "../utills/design.css";

const table = ({ data }) => {
  return (
    <div>
      <Table className="table" striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th scope="col" id="colId">
              User id
            </th>
            <th scope="col" id="colId">
              Username Sorted by number of Followers{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((fetchName, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{fetchName.id}</th>
                  <td>{fetchName.login}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default table;
