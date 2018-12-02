import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return(
    <section>
      <h1 className="title">gluten free near me</h1>
      <div className="button" ><Link to="/eat">eat</Link></div>
      <div className="button" ><Link to="/review">review</Link></div>
      <div className="button" ><Link to="/login">log in / sign up</Link></div>
    </section>
  )
}