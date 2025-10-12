import React, { useEffect, useState } from 'react'
import { getTrailerSerie } from '../api/tmdb'

export const ShowTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState()
  useEffect(() => {
    async function fetchTrailer() {
      const key = await getTrailerSerie(movieId);

      setTrailerKey(key)
    }
    fetchTrailer()
  }, [movieId])

  if (trailerKey) {
    return (
<>
        <div className='w-[700px] h-[450px] flex items-center justify-center relative'>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            id="iframeVideo"
        allowFullScreen
        className='w-[600px] h-[400px] '
        ></iframe>
     </div>
</>
     )
  } else {
    return <p>Nada de trailer</p>
  }
}
