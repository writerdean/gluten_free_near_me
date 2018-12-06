import React from 'react'
// import {Route } from 'react-router-dom'


export default function Restaurant(props) {

  const restaurant = props.data.find(restaurant =>
    restaurant.name === props.match.params.name)

  const distance = restaurant.distance.toFixed(2)

    return(
      <section className="card large">

        <p className="restaurant-name">{restaurant.name}    <span className="right distance">{`${distance}km`}</span></p>
        <p className="restaurant-address"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.long}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p className="cuisine">{`Cuisine:  ${restaurant.cuisine}`}</p>
        <p className="comments">{`Comments:  ${restaurant.comments}`}</p>
        <p className="url"><a href={`${restaurant.url}`} target="blank">{restaurant.url}</a></p>
      </section>
      
    )
}
