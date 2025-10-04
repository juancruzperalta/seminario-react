'use client'
import { useEffect, useState } from 'react'
import { getPopularMovies } from '../api/tmdb.js'

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getPopularMovies().then(setMovies)
  }, [])

  return (
    <div>
      {movies.map(movie => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      ))}
    </div>
  )
}