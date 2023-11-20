import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export function Card (props) {
  return (
    <Link to='/projectdetails'>
      <div className='Card'>
        <img src={props.url} /> {/* Accede a la propiedad "data" en las props */}
      </div>
    </Link>
  )
}
