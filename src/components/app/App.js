import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Grid from '../grid/Grid';
import Shapes from '../shapes/Shapes';
// import PropTypes from 'prop-types';
import './App.css';
import GridMap9x5 from '../grid/GridMap9x5';
import GridMap6x5 from '../grid/GridMap6x5';

const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/grid' component={Grid}></Route>
          <Route path='/gridmap6x5' component={GridMap6x5}></Route>
          <Route path='/gridmap9x5' component={GridMap9x5}></Route>
          <Route path='/shapes' component={Shapes}></Route>
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {

};

export default App;