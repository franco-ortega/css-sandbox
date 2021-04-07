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
import GridMap9x5 from '../grid/GridMap9x5';
import GridMap6x5 from '../grid/GridMap6x5';
import CircleFloating from '../shapes/CircleFloating';
import SquareFloating from '../shapes/SquareFloating';
import SquareFloating2 from '../shapes/SquareFloating2';
import './App.css';
import styles from  './App.module.css';

const App = () => {
  return (
    <div className={styles.Main}>
      <Router>
      <Header />
      <GridMap6x5 />
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          <Route path='/grid' component={Grid}></Route>
          <Route path='/gridmap6x5' component={GridMap6x5}></Route>
          <Route path='/gridmap9x5' component={GridMap9x5}></Route>
          <Route path='/shapes' component={Shapes}></Route>
          <Route path='/circlefloating' component={CircleFloating}></Route>
          <Route path='/squarefloating' component={SquareFloating}></Route>
          <Route path='/squarefloating2' component={SquareFloating2}></Route>
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {

};

export default App;
