import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import Home from './Home'
import Eat from './Eat'
import Restaurant from './Restaurant'
import {Switch, Route, Link} from 'react-router-dom'
import venues from './venues'

// let gaLat = -37.818241
// let gaLon = 144.959108
// let catLat = -37.850749
// let catLon = 144.988600
// let parkvilleLat = -37.785202
// let parkvilleLon = 144.956863
// let homeLat = -37.860439
// let homeLon = 144.972588
let currLat = -37.785202
let currLong = 144.956863

const calcDistance = (lat1, lon1, lat2, lon2) => {
  var p = 0.017453292519943295; 
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a));
}

class App extends Component {

  state = {
    restaurants: venues
  };

  componentDidMount = () => {

    const success = (position) => {
      currLat  = position.coords.latitude
      currLong = position.coords.longitude
      console.log('called after success - ' + currLat + ', ' + currLong)

      this.setState({
        restaurants: this.state.restaurants.map(restaurant => {
          return { 
            ...restaurant, 
            distance: calcDistance(currLat, currLong, restaurant.lat, restaurant.lon)
          }
        }).filter(restaurant => restaurant.distance <= 2)
      })

    }

    function error() {
      console.log("Unable to retrieve your location")
    }

    navigator.geolocation.getCurrentPosition(success, error)

  }

  render() {

    const { restaurants } = this.state

    return (
      <div>
        <main>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo right">GFNM</a>
                  <ul id="nav-mobile" className="left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/eat" className="left">Eat</Link></li>
                  </ul>
              </div>
  </nav>
          </div>

            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/eat" render={() => <Eat data={ restaurants } />} />
              <Route exact path="/restaurants/:name" render={(props) => 
                <Restaurant data={restaurants} {...props }/>} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
