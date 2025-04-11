// Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Hi, Welcome to BizVine!</h2>
      <p>Feel free to practice questions from different areas of business.</p>

      <div className="buttons">
        <Link to="/finance">
          <button>Finance Quiz</button>
        </Link>
        <Link to="/marketing">
          <button>Marketing Quiz</button>
        </Link>
        <Link to="/accounting">
          <button>Accounting Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
