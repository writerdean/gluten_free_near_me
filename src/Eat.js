import React from 'react'
import { Link } from 'react-router-dom'

export default function Eat(props) {

  return(
    <section className="light-blue darken-3">

    <h1 className="title">Restaurants</h1>

    {props.data.map(restaurant => (
      <div key={restaurant.name}>
        <p className="list-view">
          <Link to={`/restaurants/${restaurant.name}`}>
          {restaurant.name}     {restaurant.distance}</Link>
        </p>

        <p className="list-view"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.lon}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>
        <hr></hr>
      </div>
    ))}

    </section>
  )
}
