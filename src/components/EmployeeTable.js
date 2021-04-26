import React from "react";

function EmployeeTable(props) {
  return (
 <table className="table table-dark">
   <thead></thead>
   <tbody></tbody>
      <tr>
        <td>
        <img
          style={{ maxWidth: "60px" }}
          className="rounded-full shadow-md border border-gray-300"
          src={props.image}
          alt="employee"
        />
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.Dob}</td>
      </tr>
    </table>
  );
}

export default EmployeeTable;
