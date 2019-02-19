import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard.jsx';
import Popup from './components/Popup.jsx';

const dashboardWrapper = document.getElementById("dashboard-wrapper");
dashboardWrapper ? ReactDOM.render(<Dashboard />, dashboardWrapper) : false;

const popupWrapper = document.getElementById("popup-wrapper");
popupWrapper ? ReactDOM.render(<Popup />, popupWrapper) : false;