import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurants(props) {
  return(
    <section>

    <h1 className="title">Restaurants</h1>

    {props.data.map(restaurant => (
      <div key={restaurant.name}>
        <h2>
          <Link to={`/restaurants/${restaurant.name}`}>
          {restaurant.name}</Link>
        </h2>
        <p>{restaurant.address}</p>
      </div>
    ))}

    </section>
  )
}