import React from 'react';
import './App.css';
import Zoo from './Zoo.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminPage from './AdminPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <Zoo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
