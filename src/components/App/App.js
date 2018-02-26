import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Welcome from '../../containers/Welcome/Welcome';
import Banner from '../Banner/Banner';
import Main from '../../containers/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Welcome} />
        <Route path='/home' component={Banner} />
        <Route exact path='/home' render={() => (<Main type='Upcoming Events'/>)} />
        <Route exact path='/home/music' render={() => (<Main type='MUSIC'/>)} />
        <Route exact path='/home/food' render={() => (<Main type='FOOD'/>)} />
        <Route exact path='/home/culture' render={() => (<Main type='CULTURE'/>)} />
        <Route exact path='/home/nightlife' render={() => (<Main type='NIGHTLIFE'/>)} />
        <Route exact path='/home/favorites' render={() => (<Main type='FAVORITES'/>)} />
        <Route exact path='/home/search' render={() => (<Main type='SEARCH' />)} />
      </div>
    );
  }
}

export default App;
