import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/adder">
            <Header />
            <Adder />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Adder() {
  return <h2>Adder WIP</h2>;
}

export default App;
