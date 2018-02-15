import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Welcome from '../../containers/Welcome/Welcome';
import Banner from '../Banner/Banner';
import Main from '../../containers/Main/Main';
import './App.css';

// think about if I need all the other route paths in here if I just need it to load main...then change these paths within main

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Welcome} />
        <Route path='/home' component={Banner} />
        <Route exact path='/home' render={() => (<Main type='This Week'/>)} />
        <Route exact path='/home/music' render={() => (<Main type='MUSIC'/>)} />
        <Route exact path='/home/food' render={() => (<Main type='FOOD'/>)} />
        <Route exact path='/home/culture' render={() => (<Main type='CULTURE'/>)} />
        <Route exact path='/home/nightlife' render={() => (<Main type='NIGHTLIFE'/>)} />
      </div>
    );
  }
}

export default App;
