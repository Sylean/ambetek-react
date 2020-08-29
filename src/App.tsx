import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Adder from './components/Adder/Adder';
import NotFound404 from './components/NotFound404/NotFound404';
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
          <Route exact path="/adder">
            <Header />
            <Adder />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route>
            <Header />
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*
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
*/

function About() {
  return <h2>About</h2>;
}

export default App;
