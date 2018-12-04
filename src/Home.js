import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return(
    <section>

      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/eat">Eat</Link></div>
      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/review">Review</Link></div>
      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/login">Log in / Sign up</Link>
      <p></p></div>

      
    </section>
  )
}

