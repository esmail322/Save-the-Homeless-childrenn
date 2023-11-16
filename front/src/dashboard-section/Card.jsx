import React from "react";

const Card = ({ children }) => {
  return (
    <div style={styles.card}>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Card;
