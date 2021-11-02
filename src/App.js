import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import SingleFood from './Pages/SingleFood';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/recipes/:id'>
          <SingleFood />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
