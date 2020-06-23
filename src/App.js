import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Reports from './components/reports/Reports.jsx';
import Attendance from './components/attendance/Attendance.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Session from './components/session/Session.jsx';
import Performance from './components/performance/Performance.jsx';
import Students from './components/students/Students.jsx';
import Studentsdetails from './components/studentsdetails/Studentsdetails.jsx';
import Sessiondetails from './components/sessiondetails/Sessiondetails.jsx';
import Performancedetails from './components/performancedetails/Performancedetails.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div className="routetemplate">
        <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/attendance" component={Attendance}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/performance" component={Performance}></Route>
            <Route path="/performancedetails/:subject" component={Performancedetails}></Route>
            <Route path="/sessions" component={Session}></Route>
            <Route path="/sessiondetails/:sessionnumber" component={Sessiondetails}></Route>
            <Route path="/studentsdetails/:studentid" component={Studentsdetails}></Route>
            <Route path="/students" component={Students}></Route>
            <Route path="/reports" component={Reports}></Route>
          </Switch>
          </div>
          </Router>
    </div>
  );
}
  
export default App;
