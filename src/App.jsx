import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import FinanceQuiz from "./components/FinanceQuiz";
import MarketingQuiz from "./components/MarketingQuiz";
import AccountingQuiz from "./components/AccountingQuiz";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/finance" element={<FinanceQuiz />} />
        <Route path="/marketing" element={<MarketingQuiz />} />
        <Route path="/accounting" element={<AccountingQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
