import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import Home from './Home'
import Eat from './Eat'
import Restaurant from './Restaurant'
import {Switch, Route, Link} from 'react-router-dom'

let gaLat = -37.818241
let gaLon = 144.959108
let catLat = -37.850749
let catLon = 144.988600
let parkvilleLat = -37.785202
let parkvilleLon = 144.956863
let homeLat = -37.860439
let homeLon = 144.972588
let currLat = -37.818241
let currLong = 144.959108

// function getUserLocation() {
//   function success(position) {
//     currLat  = position.coords.latitude;
//     currLong = position.coords.longitude;
//     console.log(currLat + ', ' + currLong);
//   }
//   function error() {
//     console.log("Unable to retrieve your location");
//   }
//   navigator.geolocation.getCurrentPosition(success, error);
// }
// getUserLocation();

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
    restaurants: [
      {name: 'Asian Beer Cafe', address: 'Level 3, Melbourne Central, Cnr Latrobe & Swanston Streets, Melbourne, 3000, VIC', cuisine: 'asian', lat: '-37.809742', lon: '144.963762', distance: '', comments: 'seperate gluten free menu', url: 'http://asianbeercafe.com.au/', image_url: 'https://images.unsplash.com/photo-1542342656241-f23fedd6bafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Bay City Burrito', address: '4-7 Shakespeare Grove, St Kilda VIC 3182', cuisine: 'mexican', lat: '-37.868210', lon: '144.978170', distance: '', comments: 'gluten free items marked on menu', url: 'http://www.baycityburrito.com/', image_url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'},
      {name: 'Cafe Henkel', address: '102 Henkel Street, Brunswick VIC 3056', cuisine: 'cafe', lat: '-37.765010', lon: '144.954500', distance: '', comments: '100% gluten free, certfied', url: 'https://www.cafehenkel.com.au/', image_url: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Delhicious Cuisine', address: '91 Upper Heidelberg Road, Ivanhoe VIC 3079', cuisine: '', lat: '-37.769460', lon: '145.041300', distance: '', comments: 'gluten free kitchen stated on website, certified', url: 'http://delhiciouscuisine.com.au/', image_url: 'http://delhiciouscuisine.com.au/wp-content/uploads/2017/08/20-800X550.png'},
      {name: 'Fathers Office', address: '249 Lt Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.809112', lon: '144.969294', distance: '', comments: 'separate gluten free menu', url: 'http://fathersoffice.com.au/', image_url: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Guzman Y Gomez Collins', address: '7a/567 Collins St, Melbourne VIC 3000', cuisine: 'mexican', lat: '-37.818828', lon: '144.955613', distance: '', comments: 'gluten free items marked on menu', url: 'https://www.guzmanygomez.com/', image_url: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Guzman Y Gomez Swanston', address: '289-299 Swanston Street, Melbourne VIC 3000', cuisine: 'mexican', lat: '-37.810904', lon: '144.964340', distance: '', comments: 'gluten free items marked on menu', url: 'https://www.guzmanygomez.com/', image_url: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Hemp Kitchen', address: '1/173-177 Barkly Street, St Kilda VIC 3182', cuisine: 'pizza', lat: '-37.867800', lon: '144.980890', distance: '', comments: '100% gluten free menu, certified', url: 'https://www.hempkitchen.com.au/', image_url: 'https://static1.squarespace.com/static/5b1e282d12b13f8625eb25b1/5b693cadb27e393b9b927b4b/5bf3741952951dd16ec197fe/1542681643064/?format=500w'},
      {name: 'Lona', address: '64/66 Acland Street, St Kilda VIC 3182', cuisine: 'tapas', lat: '-37.866720', lon: '144.978250', distance: '', comments: 'gluten free items marked on menu', url: 'http://lona.com.au/', image_url: 'http://lona.com.au/wp-content/uploads/2017/10/4.jpg'},
      {name: 'Shop 225 Pizzeria', address: '225 Melville Road, Pascoe Vale South VIC 3044', cuisine: 'pizza', lat: '-37.739800', lon: '144.945370', distance: '', comments: 'specializing in gluten free pizza and pasta, certified', url: 'https://www.shop225.com.au/', image_url: 'https://www.shop225.com.au/wp-content/uploads/2015/08/18057634_1178816642240727_4592082961367319722_n-400x400.jpg'},
      {name: 'Vue de Monde', address: '525 Collins Street, Melbourne 3000, VIC', cuisine: 'fine dining', lat: '-37.818258', lon: '144.957520', distance: '', comments: 'no gf listings on menu, but, hey, this is Shannon Bennet, and with meals starting at $230 you better believe that they will make anything you want gluten free', url: 'http://www.vuedemonde.com.au/', image_url: 'https://images.unsplash.com/photo-1508471349025-ca3e278cf5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Wellzones GF', address: 'Shop 10, 436 Burke Road, Camberwell VIC 3124', cuisine: 'bakery', lat: '-37.821390', lon: '145.058650', distance: '', comments: 'certified, young son is coeliac', url: 'https://www.facebook.com/wellzonesgf/', image_url: 'https://scontent.fmel8-1.fna.fbcdn.net/v/t1.0-9/33143336_572994266418671_2321249782753918976_n.jpg?_nc_cat=107&_nc_ht=scontent.fmel8-1.fna&oh=6c44ca00e54b87bb00792345a605424d&oe=5C9AEFFF'}, 
      {name: 'William’s Bar & Café ', address: '1 William St, Melbourne VIC 3000', cuisine: 'modern australian', lat: '', lon: '', distance: '', comments: 'gluten free items marked on dinner menu but not express lunch menu', url: 'https://www.clarionsuitesgateway.com.au/dining/', image_url: ''}, 
      {name: 'The Wolf and I', address: '152 Chapel Street, Windsor, VIC 3181', cusine: '', lat: '.852552', lon: '144.993357', distance: '', comments: 'gluten free items listed on the menu', url: 'https://thewolfandiwindsor.com.au/', image_url: 'https://thewolfandiwindsor.com.au/wp-content/uploads/2018/10/wolflogo.svg'},
      ]
  };

  componentDidMount = () => {

    function getUserLocation() {
      function success(position) {
        currLat  = position.coords.latitude
        currLong = position.coords.longitude
        console.log(currLat + ', ' + currLong)
      }
      function error() {
        console.log("Unable to retrieve your location")
      }
      navigator.geolocation.getCurrentPosition(success, error)
    }
    getUserLocation()

    this.setState({
      restaurants: this.state.restaurants.map(restaurant => {
        return { 
          ...restaurant, 
          distance: calcDistance(currLat, currLong, restaurant.lat, restaurant.lon)
        }
      })
    })
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
