import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import Home from './Home'
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
      {name: 'Asian Beer Cafe', address: 'Level 3, Melbourne Central, Cnr Latrobe & Swanston Streets, Melbourne, 3000, VIC', cuisine: 'asian', lat: '-37.809742', lon: '144.963762', distance: '', comments: 'seperate gluten free menu', url: 'http://asianbeercafe.com.au/', image_url: 'https://images.unsplash.com/photo-1542342656241-f23fedd6bafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Bay City Burrito', address: '4-7 Shakespeare Grove, St Kilda VIC 3182', cuisine: 'mexican', lat: '-37.868210', lon: '144.978170', distance: '', comments: 'gluten free items marked on menu', url: 'http://www.baycityburrito.com/', image_url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Cafe Henkel', address: '102 Henkel Street, Brunswick VIC 3056', cuisine: 'cafe', lat: '-37.765010', lon: '144.954500', distance: '', comments: '100% gluten free, certfied', url: 'https://www.cafehenkel.com.au/', image_url: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Chin Chin', address: '125 Flinders Lane, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.815343', lon: '144.970398', distance: '', comments: 'will mark items on menu that are gluten free', url: 'https://www.chinchinrestaurant.com.au/melbourne/melbourne-menu/', image_url: 'https://images.unsplash.com/photo-1513135296080-c1ef972caa8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Ciao Mamma Pasta Bar', address: '3 Union Street, Brunswick VIC 3056', cuisine: 'pasta', lat: '-37.774310', lon: '144.960020', distance: '', comments: 'gluten free items marked on menu, certified', url: 'http://ciaomamma.com.au/', image_url: 'https://images.unsplash.com/photo-1532117472055-4d0734b51f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'},
      {name: 'Delhicious Cuisine', address: '91 Upper Heidelberg Road, Ivanhoe VIC 3079', cuisine: '', lat: '-37.769460', lon: '145.041300', distance: '', comments: 'gluten free kitchen stated on website, certified', url: 'http://delhiciouscuisine.com.au/', image_url: 'http://delhiciouscuisine.com.au/wp-content/uploads/2017/08/20-800X550.png'},
      {name: 'Fathers Office', address: '249 Lt Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.809112', lon: '144.969294', distance: '', comments: 'separate gluten free menu', url: 'http://fathersoffice.com.au/', image_url: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Fresh Twisted Cafe', address: '156 Eaton Rd, Chico CA 95973 USA', cuisine: '', lat: '39.773233', lon: '121.876961', distance: '', comments: 'gluten free bread available', url: 'Fresh Twisted Cafe', image_url: ''}, 
      {name: 'Gazi Restaurant', address: '2 Exhibition Street, Melbourne, 3000, VIC', cuisine: 'greek', lat: '-37.815305', lon: '144.972619', distance: '', comments: 'gluten free items marked on menu', url: 'https://gazirestaurant.com.au/menu', image_url: 'https://images.ctfassets.net/tzdx3a4fk995/2SYB4EM3J6Gg2OiYyaw4Gk/73c21fcaf52920fb48297e4557be07de/gazi-bend-over-box.jpg?w=1440'},
      {name: 'Guzman Y Gomez', address: '289-299 Swanston Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811157', lon: '144.964302', distance: '', comments: 'gluten free items marked on menu', url: 'https://www.guzmanygomez.com/', image_url: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Hemp Kitchen', address: '1/173-177 Barkly Street, St Kilda VIC 3182', cuisine: 'pizza', lat: '-37.867800', lon: '144.980890', distance: '', comments: '100% gluten free menu, certified', url: 'https://www.hempkitchen.com.au/', image_url: 'https://static1.squarespace.com/static/5b1e282d12b13f8625eb25b1/5b693cadb27e393b9b927b4b/5bf3741952951dd16ec197fe/1542681643064/?format=500w'},
      {name: 'I Love Dumplings', address: '2/29 Fitzroy Street, St Kilda VIC 3182', cuisine: 'asian', lat: '-37.861700', lon: '144.973600', distance: '', comments: 'seperate gluten free menu', url: 'http://ilovedumpling.com.au/stkilda/', image_url: ''},
      {name: 'Lona', address: '64/66 Acland Street, St Kilda VIC 3182', cuisine: 'tapas', lat: '-37.866720', lon: '144.978250', distance: '', comments: 'gluten free items marked on menu', url: 'http://lona.com.au/', image_url: 'http://lona.com.au/wp-content/uploads/2017/10/4.jpg'},
      {name: 'Mamasita', address: 'Level 1/11 Collins St, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.755254', lon: '145.008221', distance: '', comments: 'most items are gluten free, gf on request and no gf option marked on menu', url: 'https://www.mamasita.com.au/', image_url: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
      {name: 'Mediterraneo Charcoal Restaurant', address: '116 Bridport Street, Albert Park VIC 3206', lat: '-37.840610', lon: '144.956010', distance: '', comments: 'all item gluten free except for bread, gf bread upon request', url: 'http://mediterraneo.com.au/', image_url: 'http://mediterraneo.com.au/wp-content/uploads/2015/08/porterhouse4.jpg'},
      {name: 'Portello Rosso', address: '15 Warburton Lane, Melbourne, 3000, VIC', cuisine: 'tapas', lat: '-37.813512', lon: '144.961859', distance: '', comments: 'gluten free and coeliac marked on menu, as well as items that can be modified to be gluten free', url: 'https://portellorosso.com.au/', image_url: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'},
      {name: 'Shop 225 Pizzeria', address: '225 Melville Road, Pascoe Vale South VIC 3044', cuisine: 'pizza', lat: '-37.739800', lon: '144.945370', distance: '', comments: 'specializing in gluten free pizza and pasta, certified', url: 'https://www.shop225.com.au/', image_url: 'https://www.shop225.com.au/wp-content/uploads/2015/08/18057634_1178816642240727_4592082961367319722_n-400x400.jpg'},
      {name: 'Sin of Cortez', address: '2290 Esplanade, Chico CA 95926 USA', cuisine: '', lat: '39.752830', lon: '121.856699', distance: '', comments: 'gluten free menu items, check for cross contamination', url: '', image_url: ''},
      {name: 'Touche Hombre', address: '233 Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811528', lon: '144.965520', distance: '', comments: 'gf marked on menu', url: 'https://www.touchehombre.com.au/', image_url: 'https://static.wixstatic.com/media/bc4087_ab0825192be646358c0bcf484b4f3b9a~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1506,h_1004,al_c,q_85,usm_0.66_1.00_0.01/bc4087_ab0825192be646358c0bcf484b4f3b9a~mv2_d_5760_3840_s_4_2.webp'},
      {name: 'Vegie Bar', address: '380 Brunswick Street, Fitzroy VIC 3065', cuisine: 'vegetarian', lat: '-37.795850', lon: '144.979100', distance: '', comments: 'gluten free items marke on menu', url: 'https://www.vegiebar.com.au/', image_url: 'https://66.media.tumblr.com/55e72b1c0391a1a01f12c3073dc27489/tumblr_p77edsZvCb1x3jir5o3_540.jpg'}, 
      {name: 'Wellzones GF', address: 'Shop 10, 436 Burke Road, Camberwell VIC 3124', cuisine: 'bakery', lat: '-37.821390', lon: '145.058650', distance: '', comments: 'certified, young son is coeliac', url: 'https://www.facebook.com/wellzonesgf/', image_url: 'https://scontent.fmel8-1.fna.fbcdn.net/v/t1.0-9/33143336_572994266418671_2321249782753918976_n.jpg?_nc_cat=107&_nc_ht=scontent.fmel8-1.fna&oh=6c44ca00e54b87bb00792345a605424d&oe=5C9AEFFF'}
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
