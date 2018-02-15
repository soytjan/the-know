import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Events from '../../components/Events/Events';
import NavTime from '../NavTime/NavTime';
import './Main.css';

// Main.propTypes = {
//   // music: PropTypes.array,
//   // food: PropTypes.array,
//   // culture: PropTypes.array,
//   // nightlife: PropTypes.array
// };

class Main extends Component {
  // on componentDidMount make the fetch calls for music, food, culture, nightlife

  render() {
    return (
      <section className="Main">
        I'm a Main!
        <h3>{this.props.type}</h3>
        <Route 
          exact path='/home' 
          render={() => (<Events info={this.props.events} />)}
        />
        <Route 
          exact path='/music' 
          render={() => (<Events info='music data' />)}
        />
        <Route 
          exact path='/food' 
          render={() => (<Events info='food data' />)}
        />
        <Route 
          exact path='/culture' 
          render={() => (<Events info='culture data' />)}
        />
        <Route 
          exact path='/nightlife' 
          render={() => (<Events info='nightlife data' />)}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  music: state.music,
  
})

export default connect(mapStateToProps)(Main);