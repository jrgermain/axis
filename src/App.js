import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import ErrorPage from './components/ErrorPage';
import QuizPage from './components/QuizPage';

function App() {
  return (
    <div id='app'>
      <header>
        <Link to="/">
          <span id="app-name">Axis</span>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/create/define-axes" component={CreatePage} />
          <Route path="/quiz" component={QuizPage} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;