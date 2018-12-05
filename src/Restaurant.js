import React from 'react'
// import {Route } from 'react-router-dom'


export default function Restaurant(props) {

  const restaurant = props.data.find(restaurant =>
    restaurant.name === props.match.params.name)

    return(
      <section className="card small">

        <p className="restaurant-name">{restaurant.name}</p>
        <p className="restaurant-address"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.long}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p className="list-view">{`Cuisine:  ${restaurant.cuisine}`}</p>
        <p className="list-view">{`Comments:  ${restaurant.comments}`}</p>
        
      </section>
      
    )
}
