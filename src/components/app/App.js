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
import GridMap from '../grid/GridMap';

const App = () => {
  return (
    <div>
      <Router>
      {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/grid' component={Grid}></Route>
          <Route path='/gridmap' component={GridMap}></Route>
          <Route path='/shapes' component={Shapes}></Route>
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {

};

export default App;
