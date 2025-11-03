import React, { useEffect, useState } from 'react'
import { getTrailerSerie } from '../../api/tmdb';

export const ShowTrailer = ({ serieId }) => {
  console.log(serieId)
  const [trailerKey, setTrailerKey] = useState()
  const [TrailerNull, setTrailerNull] = useState(false)
  useEffect(() => {
    async function fetchTrailer() {
      const key = await getTrailerSerie(serieId);

      setTrailerKey(key)
    }
    fetchTrailer()
  }, [serieId])
  useEffect(() => {
    const time=setTimeout(() => {
      setTrailerNull(true)
    }, 300);
    return () => clearTimeout(time);
  }, [])
  
  if (trailerKey) {
    return (
      <>

        <div className='w-full h-full flex items-center justify-center relative'>
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
    return(
    <>
          {TrailerNull &&(
    <div className='w-[300px] h-full flex items-center justify-center relative'>      
       <span className="text-2xl uppercase font-semibold text-gray-200 max-w-[200px] right-0">The trailer for this serie is not available</span>
          </div>
        )
      }
      </>
    )
  }
}
