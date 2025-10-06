import React, { useEffect, useState } from 'react'
import { getTrailerSerie } from '../api/tmdb'

export const ShowTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState()
  useEffect(() => {
    async function fetchTrailer() {
      const key = await getTrailerSerie(movieId);
      setTrailerKey(key);
    }
    fetchTrailer();
  }, [movieId])

  return trailerKey ? (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${trailerKey}`}
    title="Trailer"
    allowFullScreen
    className="rounded-2xl shadow-lg"
  ></iframe>
) : (
  <p className="text-white">No hay trailer disponible 😔</p>
);
}
