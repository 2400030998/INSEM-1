import React, { useState } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    { name: "Keerthana", department: "IT", salary: 50000 },
    { name: "Ravi", department: "HR", salary: 45000 },
    { name: "Sita", department: "Finance", salary: 55000 },
    { name: "Arjun", department: "Marketing", salary: 48000 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setEmployees(sortedData);
  };

  return (
    <div style={{ padding: "20px", color: "black" }}>
      <h2>Employee Table</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "left",
          border: "1px solid #ccc",
          color: "black",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", cursor: "pointer", color: "black" }}>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("department")}>Department</th>
            <th onClick={() => handleSort("salary")}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                borderBottom: "1px solid #ddd",
                color: "black",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6f7ff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#ffffff" : "#f9f9f9")
              }
            >
              <td style={{ padding: "8px" }}>{emp.name}</td>
              <td style={{ padding: "8px" }}>{emp.department}</td>
              <td style={{ padding: "8px" }}>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
