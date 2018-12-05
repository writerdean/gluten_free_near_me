import React from 'react'
// import {Route } from 'react-router-dom'


export default function Restaurant(props) {

  const restaurant = props.data.find(restaurant =>
    restaurant.name === props.match.params.name)

    return(
      <section className="card small">

        <p className="restaurant-name">{restaurant.name}    <span className="right">{restaurant.distance}</span></p>
        <p className="restaurant-address"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.long}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p className="cuisine">{`Cuisine:  ${restaurant.cuisine}`}</p>
        <p className="comments">{`Comments:  ${restaurant.comments}`}</p>
        <p className="url"><a href={`${restaurant.url}`}>{restaurant.url}</a></p>
      </section>
      
    )
}
