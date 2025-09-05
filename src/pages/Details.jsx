import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import movies from '../assets/movies';
import ReactPlayer from 'react-player';
import MovieCard from '../components/MovieCard';

let UnmuteIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-up fill-white" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
</svg>
);

let MuteIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-mute fill-white" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
      </svg>
);
const Details = () => {

    const volumeHandler=()=>{
        setVolume((prev)=>!prev)
    }


   const [volume,setVolume] = useState(true);

   
    let {slug} = useParams();
    let movie = movies.find((movie)=>movie?.slug === slug)
    let suggestions = movies.filter((suggestMovies)=>(suggestMovies.genre===movie.genre  && suggestMovies?.id!=movie?.id));
    console.log(suggestions)
  return (
  <>
       <div className='w-full  relative overflow-hidden' >
       
            <ReactPlayer src={movie?.youtube_trailer} width="100vw" muted={volume} playing={true} loop={true}  height="80vh" className='scale-[1.37] hover:cursor-pointer'/>

           <Link to={`/`}> <button className='hover:cursor-pointer border border-gray-300 px-5 rounded-lg py-1.5 absolute top-10 right-10 text-white'>Go Back</button> </Link>

            <div className='absolute w-[500px] left-42 bottom-35'>
                <button className='bg-orange-400 shadow-sm shadow-orange-200  text-orange-700 px-1.5 py-1 rounded-md'>IMDB rating : {movie?.imdb_rating}</button>
                <h1 className='font-black text-6xl mt-2 text-slate-300 font-sans'>{movie?.title}</h1>
                <p className='font-light text-slate-300 text-lg mt-2'>{movie?.description}</p>
                <button className='bg-white px-15 hover:cursor-pointer text-black py-3 mt-3 rounded-lg font-semibold'>Add to wishlist</button>
            </div>
            <button onClick={volumeHandler} className='absolute top-96 right-55 border border-white rounded-full p-3'>{volume ? <MuteIcon/> : <UnmuteIcon/>}</button>
        </div>

         <h1 className='font-extrabold text-3xl m-7 font-serif text-white text-shadow-black text-shadow-sm'>Movie Suggestions</h1>

        <div className='flex flex-row gap-4 m-5'>
           
            {
                suggestions.map((suggestedMovie)=><MovieCard img={suggestedMovie?.img}/>)
            }
        </div>
  </>

  )
}

export default Details