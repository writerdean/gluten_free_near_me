import React from 'react'

export default function Restaurant(props) {
  const restaurant = props.data.find(restaurant =>
    restaurant.name === props.match.params.name)

    return(
      <section>

        <h1>Restaurant</h1>
        <p>{restaurant.name}</p>
        <p>{restaurant.address}</p>
      </section>
    )
}