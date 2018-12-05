import React, { Component } from 'react';
import './reset.css';
import './App.css';
// import Home from './Home'
import Eat from './Eat'
import Restaurant from './Restaurant'
import {Switch, Route, Link} from 'react-router-dom'

let currLat = -37.818241
let currLong = 144.959108

// function getUserLocation() {

//   function success(position) {
//     let latitude  = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     console.log(latitude + ', ' + longitude)
//   }

//   function error() {
//     console.log("Unable to retrieve your location");
//   }

// navigator.geolocation.getCurrentPosition(success, error);
// }
// console.log(getUserLocation())


const calcDistance = (lat1, lon1, lat2, lon2) => {
  var p = 0.017453292519943295; 
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)).toFixed(4);
}

class App extends Component {

  state = {
    restaurants: [
      {name: 'Asian Beer Cafe', address: 'Level 3, Melbourne Central, Cnr Latrobe & Swanston Streets, Melbourne, 3000, VIC', cuisine: 'asian', lat: '-37.809742', lon: '144.963762', distance: '', comments: 'seperate gluten free menu'},
      {name: 'Bay City Burrito', address: '4-7 Shakespeare Grove, St Kilda VIC 3182', cuisine: 'mexican', lat: '-37.868210', lon: '144.978170', distance: '', comments: ''},
      {name: 'Cafe Henkel', address: '102 Henkel Street, Brunswick VIC 3056', cuisine: '', lat: '-37.765010', lon: '144.954500', distance: '', comments: ''},
      {name: 'Chin Chin', address: '125 Flinders Lane, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.817185', lon: '144.964545', distance: '', comments: ''},
      {name: 'Ciao Mamma Pasta Bar', address: '3 Union Street, Brunswick VIC 3056', cuisine: 'pasta', lat: '-37.774310', lon: '144.960020', distance: '', comments: ''},
      {name: 'Delhicious Cuisine', address: '91 Upper Heidelberg Road, Ivanhoe VIC 3079', cuisine: '', lat: '-37.769460', lon: '145.041300', distance: '', comments: ''},
      {name: 'Fathers Office', address: '249 Lt Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.809112', lon: '144.969294', distance: '', comments: ''},
      {name: 'Fresh Twisted Cafe', address: '156 Eaton Rd, Chico CA 95973 USA', cuisine: '', lat: '39.773233', lon: '121.876961', distance: '', comments: 'gluten free bread available'}, 
      {name: 'Gazi Restaurant', address: '2 Exhibition Street, Melbourne, 3000, VIC', cuisine: 'greek', lat: '-37.815305', lon: '144.972619', distance: '', comments: ''},
      {name: 'Guzman Y Gomez', address: '289-299 Swanston Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811157', lon: '144.964302', distance: '', comments: ''},
      {name: 'Hemp Kitchen', address: '1/173-177 Barkly Street, St Kilda VIC 3182', cuisine: 'pizza', lat: '-37.867800', lon: '144.980890', distance: '', comments: ''},
      {name: 'I Love Dumplings', address: '2/29 Fitzroy Street, St Kilda VIC 3182', cuisine: 'asian', lat: '-37.861700', lon: '144.973600', distance: '', comments: ''},
      {name: 'Lona', address: '64/66 Acland Street, St Kilda VIC 3182', cuisine: 'tapas', lat: '-37.866720', lon: '144.978250', distance: '', comments: ''},
      {name: 'Mamasita', address: 'Level 1/11 Collins St, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.755254', lon: '145.008221', distance: '', comments: ''},
      {name: 'Mediterraneo Charcoal Restaurant', address: '116 Bridport Street, Albert Park VIC 3206', lat: '-37.840610', lon: '144.956010', distance: '', comments: ''},
      {name: 'Portello Rosso', address: '15 Warburton Lane, Melbourne, 3000, VIC', cuisine: 'tapas', lat: '-37.813503', lon: '144.961790', distance: '', comments: ''},
      {name: 'Royal Stack', address: '470 Collins Street, Melbourne VIC 3000', cuisine: 'burgers', lat: '-37.817325', lon: '144.958290', distance: '', comments: ''},
      {name: 'Shop 225 Pizzeria', address: '225 Melville Road, Pascoe Vale South VIC 3044', cuisine: 'pizza', lat: '-37.739800', lon: '144.945370', distance: '', comments: ''},
      {name: 'Sin of Cortez', address: '2290 Esplanade, Chico CA 95926 USA', cuisine: '', lat: '39.752830', lon: '121.856699', distance: '', comments: 'gluten free menu items, check for cross contamination'},
      {name: 'Spiga Bar', address: 'Shop 2, Menzies Alley, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.810685', lon: '144.962436', distance: '', comments: ''},
      {name: 'Sweet Salt', address: '296 High Street, Northcote VIC 3070', cuisine: '', lat: '-37.771470', lon: '144.998740', distance: '', comments: ''},
      {name: 'Touche Hombre', address: '233 Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811528', lon: '144.965520', distance: '', comments: 'gf marked on menu'},
      {name: 'Vegie Bar', address: '380 Brunswick Street, Fitzroy VIC 3065', cuisine: 'vegetarian', lat: '-37.795850', lon: '144.979100', distance: '', comments: ''}, 
      {name: 'Wellzones GF', address: 'Shop 10, 436 Burke Road, Camberwell VIC 3124', cuisine: 'cafe', lat: '-37.821390', lon: '145.058650', distance: '', comments: ''}
      ]
  };

  componentDidMount = () => {
    this.setState({
      restaurants: this.state.restaurants.map(restaurant => {
        return { 
          ...restaurant, 
          distance: calcDistance(currLat, currLong, restaurant.lat, restaurant.lon)
        }
      })
    })
  }

  // sortList = this.state.restaurants.slice(0)
  // compare(a,b) {
  //   if (a.distance< b.distance)
  //     return -1;
  //   if (a.distance > b.distance)
  //     return 1;
  //     return 0;
  //   }
  //   sortList.sort(compare)

  render() {

    const { restaurants } = this.state
    // const currLocation = crd.latitude + ', ' + crd.longitude

    return (
      <div>
        <main>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo right">GFNM</a>
                  <ul id="nav-mobile" className="left">
                    <li><Link to="/">Home</Link></li>
                  </ul>
              </div>
  </nav>
          </div>


            <Switch>
              {/* <Route exact path="/" render={() => <Home />} /> */}
              <Route exact path="/" render={() => <Eat data={ restaurants } />} />
              <Route exact path="/restaurants/:name" render={(props) => 
                <Restaurant data={restaurants} {...props }/>} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
