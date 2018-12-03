import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurants(props) {
  // const restaurantLatLong = restaurant.lat + ', ' +  restaurant.long
  return(
    <section>

    <h1 className="title">Restaurants</h1>

    {props.data.map(restaurant => (
      <div key={restaurant.name}>
        <h3>
          <Link to={`/restaurants/${restaurant.name}`}>
          {restaurant.name}</Link>
        </h3>
        <p><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.long}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>
      </div>
    ))}

    </section>
  )
}