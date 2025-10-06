'use client'
import { useEffect, useState } from 'react'
import { getPopularMovies } from '../api/tmdb.js'
import { CardImage } from './CardImage.jsx'

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPopularMovies().then(setMovies)
  }, [])

  return (
    <div className='justify-center items-center flex'>
      <CardImage movies={movies} />
    </div>
  )
}