import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Home from './Home'
import Eat from './Eat'
import Restaurant from './Restaurant'
import {Switch, Route, Link} from 'react-router-dom'


class App extends Component {

  state = {
    restaurants: [
      {name: 'Bay City Burrito', address: '4-7 Shakespeare Grove, St Kilda VIC 3182', cuisine: 'mexican', lat: '-37.868210', long: '144.978170'},
      {name: 'Cafe Henkel', address: '102 Henkel Street, Brunswick VIC 3056', cuisine: '', lat: '-37.765010', long: '144.954500'},
      {name: 'Ciao Mamma Pasta Bar', address: '3 Union Street, Brunswick VIC 3056', cuisine: 'pasta', lat: '-37.774310', long: '144.960020'},
      {name: 'Delhicious Cuisine', address: '91 Upper Heidelberg Road, Ivanhoe VIC 3079', cuisine: '', lat: '-37.769460', long: '145.041300'},
      {name: 'Hemp Kitchen', address: '1/173-177 Barkly Street, St Kilda VIC 3182', cuisine: 'pizza', lat: '-37.867800', long: '144.980890'},
      {name: 'I Love Dumplings', address: '2/29 Fitzroy Street, St Kilda VIC 3182', cuisine: 'asian', lat: '-37.861700', long: '144.973600'},
      {name: 'Lona', address: '64/66 Acland Street, St Kilda VIC 3182', cuisine: 'tapas', lat: '-37.866720', long: '144.978250'},
      {name: 'Mediterraneo Charcoal Restaurant', address: '116 Bridport Street, Albert Park VIC 3206', lat: '-37.840610', long: '144.956010'},
      {name: 'Royal Stack', address: '470 Collins Street, Melbourne VIC 3000', cuisine: 'burgers', lat: '-37.817325', long: '144.958290'},
      {name: 'Shop 225 Pizzeria', address: '225 Melville Road, Pascoe Vale South VIC 3044', cuisine: 'pizza', lat: '-37.739800', long: '144.945370'},
      {name: 'Sweet Salt', address: '296 High Street, Northcote VIC 3070', cuisine: '', lat: '-37.771470', long: '144.998740'},
      {name: 'Vegie Bar', address: '380 Brunswick Street, Fitzroy VIC 3065', cuisine: 'vegetarian', lat: '-37.795850', long: '144.979100'}, 
      {name: 'Wellzones GF', address: 'Shop 10, 436 Burke Road, Camberwell VIC 3124', cuisine: 'cafe', lat: '-37.821390', long: '145.058650'}
    ]
  }

  render() {

    const { restaurants } = this.state

    return (
      <div className="App blue lighten-3">
        <nav className="blue lighten-3">
        <Link to="/">Home</Link>
        </nav>
          <main>
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
