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
  // componentDidMount = async() {
  //   const musicResponse = await 
  // }

  render() {
    const { events, music, food, culture, nightlife } = this.props;

    return (
      <section className="Main">
        I'm a Main!
        <h3>{this.props.type}</h3>
        <Route 
          exact path='/home' 
          render={() => (<Events info={events} />)}
        />
        <Route 
          exact path='/home/music' 
          render={() => (<Events info={music} />)}
        />
        <Route 
          exact path='/home/food' 
          render={() => (<Events info={food} />)}
        />
        <Route 
          exact path='/home/culture' 
          render={() => (<Events info={culture} />)}
        />
        <Route 
          exact path='/home/nightlife' 
          render={() => (<Events info={nightlife} />)}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  music: state.music,
  food: state.food,
  culture: state.culture,
  nightlife: state.nightlife
})

export default connect(mapStateToProps)(Main);