import React, { Component } from 'react';
import './reset.css';
import './App.css';
// import Distance from './Distance'
import Home from './Home'
import Eat from './Eat'
import Restaurant from './Restaurant'
import {Switch, Route, Link} from 'react-router-dom'


class App extends Component {

  state = {
    restaurants: [
      {name: '', address: '', cuisine: '', lat: '', lon: ''},
      {name: 'Asian Beer Cafe*', address: 'Level 3, Melbourne Central, Cnr Latrobe & Swanston Streets, Melbourne, 3000, VIC', cuisine: 'asian', lat: '-37.809742', lon: '144.963762', comments: 'seperate gluten free menu'},
      {name: 'Bay City Burrito*', address: '4-7 Shakespeare Grove, St Kilda VIC 3182', cuisine: 'mexican', lat: '-37.868210', lon: '144.978170'},
      {name: 'Cafe Henkel', address: '102 Henkel Street, Brunswick VIC 3056', cuisine: '', lat: '-37.765010', lon: '144.954500'},
      {name: 'Chin Chin', address: '125 Flinders Lane, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.817185', lon: '144.964545'},
      {name: 'Ciao Mamma Pasta Bar', address: '3 Union Street, Brunswick VIC 3056', cuisine: 'pasta', lat: '-37.774310', lon: '144.960020'},
      {name: 'Delhicious Cuisine', address: '91 Upper Heidelberg Road, Ivanhoe VIC 3079', cuisine: '', lat: '-37.769460', lon: '145.041300'},
      {name: 'Fathers Office', address: '249 Lt Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.809112', lon: '144.969294', comments: 'seperate gluten free menu'},
      {name: 'Gazi Restaurant', address: '2 Exhibition Street, Melbourne, 3000, VIC', cuisine: 'greek', lat: '-37.928171', lon: '145.192372'},
      {name: 'Guzman Y Gomez', address: '289-299 Swanston Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811157', lon: '144.964302'},{name: 'Hemp Kitchen', address: '1/173-177 Barkly Street, St Kilda VIC 3182', cuisine: 'pizza', lat: '-37.867800', lon: '144.980890'},
      {name: 'I Love Dumplings', address: '2/29 Fitzroy Street, St Kilda VIC 3182', cuisine: 'asian', lat: '-37.861700', lon: '144.973600'},
      {name: 'Lona', address: '64/66 Acland Street, St Kilda VIC 3182', cuisine: 'tapas', lat: '-37.866720', lon: '144.978250'},
      {name: 'Mamasita', address: 'Level 1/11 Collins St, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.755254', lon: '145.008221'},
      {name: 'Mediterraneo Charcoal Restaurant', address: '116 Bridport Street, Albert Park VIC 3206', lat: '-37.840610', lon: '144.956010'},
      {name: 'Portello Rosso', address: '15 Warburton Lane, Melbourne, 3000, VIC', cuisine: 'tapas', lat: '-37.813503', lon: '144.961790'}, 
      {name: 'Royal Stack', address: '470 Collins Street, Melbourne VIC 3000', cuisine: 'burgers', lat: '-37.817325', lon: '144.958290'},
      {name: 'Shop 225 Pizzeria', address: '225 Melville Road, Pascoe Vale South VIC 3044', cuisine: 'pizza', lat: '-37.739800', lon: '144.945370'},
      {name: 'Spiga Bar', address: 'Shop 2, Menzies Alley, Melbourne, 3000, VIC', cuisine: 'international', lat: '-37.810685', lon: '144.962436'},
      {name: 'Sweet Salt', address: '296 High Street, Northcote VIC 3070', cuisine: '', lat: '-37.771470', lon: '144.998740'},
      {name: 'Touche Hombre', address: '233 Lonsdale Street, Melbourne, 3000, VIC', cuisine: 'mexican', lat: '-37.811528', lon: '144.965520', comments: 'gf marked on menu'},
      {name: 'Vegie Bar', address: '380 Brunswick Street, Fitzroy VIC 3065', cuisine: 'vegetarian', lat: '-37.795850', lon: '144.979100'}, 
      {name: 'Wellzones GF', address: 'Shop 10, 436 Burke Road, Camberwell VIC 3124', cuisine: 'cafe', lat: '-37.821390', lon: '145.058650'}
          ]
  };

  


  render() {

    const { restaurants } = this.state
    // const currLocation = crd.latitude + ', ' + crd.longitude

    return (
      <div>
        <nav className="light-blue darken-3">
        <Link to="/">Home</Link>
        </nav>
          <main>
          <h1 className="title light-blue darken-3">Gluten Free Near Me</h1>
      <p></p>

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
