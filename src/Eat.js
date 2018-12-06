import React from 'react'
import { Link } from 'react-router-dom'

export default function Eat(props) {

  return(
    <section>

    {props.data.filter(restaurant => restaurant.distance <= 1.5).map(restaurant => (
      <div  className="card medium" key={restaurant.name}>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
              <img src={`${restaurant.image_url}`} alt=""></img>
              <span className="card-title"><Link to={`/restaurants/${restaurant.name}`}>
            {restaurant.name}</Link>    
        </span>
              </div>
              <div className="card-content">
              <p className="cuisine">{`Cuisine:  ${restaurant.cuisine}`}</p>
              </div>
              <div className="card-action">
              <a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.lon}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a>
              </div>
            </div>
          </div>
        </div>


      </div>
    ))}
    </section>
  )
}
