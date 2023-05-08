import React from "react";

const Loading = () => {
  return (
    <div
      className="loading-page"
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
