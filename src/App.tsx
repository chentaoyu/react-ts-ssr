import React from "react";
import {
  Link
} from "react-router-dom";

import Routes from './routers';
import './App.css';

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
}

