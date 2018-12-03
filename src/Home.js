import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return(
    <section>
      <h1 className="title light-blue darken-3">Gluten Free Near Me</h1>
      <p></p>
      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/eat">Eat</Link></div>
      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/review">Review</Link></div>
      <div className="button waves-effect light-blue darken-2 btn-large" ><Link to="/login">Log in / Sign up</Link>
      <p></p></div>

      
    </section>
  )
}

