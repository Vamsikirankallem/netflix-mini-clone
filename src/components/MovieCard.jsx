import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({img,slug}) => {
  return (
    <Link to={`/details/${slug}`}>
      <div>
        <img src={img} alt="" className='w-50 h-75 object-cover rounded-xl' />
    </div>
    </Link>
  )
}

export default MovieCard