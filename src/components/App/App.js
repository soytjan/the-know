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
        <Route exact path='/home' render={() => (<Main title='This Week'/>)} />
        <Route exact path='/home/music' render={() => (<Main title='MUSIC'/>)} />
        <Route exact path='/home/food' render={() => (<Main title='FOOD'/>)} />
        <Route exact path='/home/culture' render={() => (<Main title='CULTURE'/>)} />
        <Route exact path='/home/nightlife' render={() => (<Main title='NIGHTLIFE'/>)} />
      </div>
    );
  }
}

export default App;
