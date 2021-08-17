import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
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
      <Header />
        <Switch>
          <Route exact path="/adder">
            <Adder />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
