import React from "react";

const table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Full Name</th>
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
    </table>
  );
};

export default table;
