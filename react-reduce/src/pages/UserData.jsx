import React from "react";

function UserData() {
  return (
    <>
      <table id="table_id">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maths</td>
            <td>90</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>85</td>
            <td>A</td>
          </tr>
          <tr>
            <td>English</td>
            <td>80</td>
            <td>A</td>
          </tr>
          <tr>
            <td>EVS</td>
            <td>75</td>
            <td>B+</td>
          </tr>
          <tr>
            <td>History</td>
            <td>70</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserData;
