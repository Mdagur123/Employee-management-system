import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <Router>
      <div className="app" >
        <h1>Employee Management System</h1>
        <nav>
          <ul>
            <li><Link to="/add-employee">Add Employee</Link></li>
            <li><Link to="/view-employees">View Employee List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/view-employees" element={<ViewEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
