import React from 'react'
import movies from '../assets/movies'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[90vw] grid grid-cols-5 mx-auto gap-5 grid-flow-dense mt-20 justify-center'>
        {
            movies.map((movie)=><MovieCard img={movie?.img} slug={movie?.slug}/>)
        }
    </div>
    </>
  )
}

export default Home