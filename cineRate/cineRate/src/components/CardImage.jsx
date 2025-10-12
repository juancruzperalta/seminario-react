import React, { useState } from 'react'
import { ShowTrailer } from './ShowTrailer'

export const CardImage = ({ movies }) => {
   const [selectedId, setSelectedId] = useState(null)

  function viewTrailer(movieId) {
    setSelectedId(movieId);
  }
  return (
    <>
      {selectedId && (
        <div className='bg-black/50 w-full h-[100vh] absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center z-10'>
          <div className='w-[700px] h-[400px] relative'>

          <ShowTrailer movieId={selectedId} />
        <button className='top-0 right-0 absolute bg-black h-10 w-10 cursor-pointer rounded-full' onClick={() => setSelectedId(null)}>X</button>
        </div>
          </div>
      )}
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 relative'>
      {movies.map((movie) => (
        <div key={movie.id} className='relative'>
          <div key={movie.id} className='relative'>
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.name} className='h-[340px] object-cover rounded-lg shadow-md'/>
            <div className='absolute bottom-0 rounded-b-md w-full bg-gray-800/85 pt-2'><span>{movie.name}</span>
              <div className='flex gap-4 justify-end mt-1 mr-1'>
              <span className='flex justify-center items-center'>{movie.vote_average} <svg className='w-4 h-4 fill-amber-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/></svg></span></div>
            <button className='cursor-pointer bg-gray-900/85 w-full p-1 font-medium hover:bg-gray-900/55' onClick={() => viewTrailer(movie.id)}>Trailer</button>
            </div>
        </div>
      </div>
      ))
      }
      </div>

    </>
    )
}
