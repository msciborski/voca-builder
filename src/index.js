import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard.jsx';

const dashboardWrapper = document.getElementById("dashboard-wrapper");
dashboardWrapper ? ReactDOM.render(<Dashboard />, dashboardWrapper) : false;