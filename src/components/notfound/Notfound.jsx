import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "red" }}>
        401
      </h1>
      <h2 style={{ marginBottom: "20px", color: "red" }}>
        You don't have access or the page is not found.
      </h2>
      <p style={{ marginBottom: "20px" }}>
        The page you are looking for either doesn't exist or you don't have
        permission to view it.
      </p>
    </div>
  );
};

export default NotFound;
