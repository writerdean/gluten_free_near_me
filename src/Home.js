import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return(
    <section>

      <div><Link to="/eat">Eat</Link></div>
      <div><Link to="/review">Review</Link></div>
      <div><Link to="/login">Log in / Sign up</Link>
      </div>      
    </section>
  )
}

