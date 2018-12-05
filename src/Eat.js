import React from 'react'
import { Link } from 'react-router-dom'

export default function Eat(props) {

  return(
    <section>

    {/* {props.data.filter(function(restaurant) {
      return restaurant.distance <= 1;
    })} */}

    {props.data.map(restaurant => (
      <div  className="card small" key={restaurant.name}>
        <div className="name-container">
          <div className="restaurant-name">
            <Link to={`/restaurants/${restaurant.name}`}>
            {restaurant.name}</Link>
          </div><div className="right">{restaurant.distance}</div>
        </div>

        <p className="restaurant-address"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.lon}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p className="restaurant-cuisine"> {restaurant.cuisine}</p>
        <p className="restaurant-comments"> {restaurant.comments}</p>

      </div>
    ))}




    </section>
  )
}
