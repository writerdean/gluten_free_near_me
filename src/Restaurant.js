import React from 'react'
// import {Route } from 'react-router-dom'


export default function Restaurant(props) {

  const restaurant = props.data.find(restaurant =>
    restaurant.name === props.match.params.name)
  // const restaurantLatLong = restaurant.lat + ', ' +  restaurant.long

    return(
      <section>


        <p>{restaurant.name}</p>
        <p><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.long}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p>Cuisine: food that won't make you sick</p>
        <p>Menu items:  </p>

      </section>
      
    )
}
