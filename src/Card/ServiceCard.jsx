import React from 'react'
import './ServiceCard.css'; // Assuming you have a CSS file for styling
const ServiceCard = ({icon,title, description}) => {
  return (
    <div className='card'>
        <div>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard