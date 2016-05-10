"use strict"

import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter"
import {Router, Route, IndexedRoute, hashHistory} from "react-router";

const theme = "blue";

const app = document.getElementById("app");

window.React = React;

ReactDOM.render(<AppRouter theme={theme}/>, app);