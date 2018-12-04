import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurants(props) {

  const calcDistance = (lat1, lon1, lat2, lon2) => {
    var p = 0.017453292519943295; 
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a));
  }

  let currLat = -37.8186905
  let currLong = 144.959227

  return(
    <section>

    <h1 className="title">Restaurants</h1>

    {props.data.map(restaurant => (
      <div key={restaurant.name}>
        <p className="list-view">
          <Link to={`/restaurants/${restaurant.name}`}>
          {restaurant.name}</Link>
        </p>
        <p>{`${calcDistance(currLat, currLong, restaurant.lat, restaurant.lon).toFixed(2)}km`}</p>
        <p className="list-view"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.lon}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>
        <hr></hr>
      </div>
    ))}

    </section>
  )
}
