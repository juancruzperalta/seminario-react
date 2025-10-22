import React, { useLayoutEffect, useRef, useState } from 'react'
import { ShowTrailer } from './ShowTrailer'
import { CardDetails } from './CardDetails'

export const SeriesCard = ({ series }) => {
   const [TrailerID, setTrailerID] = useState(null)
    const [DetailsID, setDetailsID] = useState(null)
  function viewTrailer(serieId) {
    setTrailerID(serieId);
  }
  function viewDetails(serieId) {
    setDetailsID(serieId);
  }
  return (
    <>
      {TrailerID && (
        <div className='bg-black/45 w-full h-[100vh] absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center z-10'>
          <div className='w-[700px] h-[400px] relative'>

          <ShowTrailer serieId={TrailerID} />
        <button className='top-0 right-0 absolute bg-[var(--colorAccent)] opacity-80 hover:bg-[var(--buttomActive)] h-10 w-10 cursor-pointer rounded-full' onClick={() => setTrailerID(null)}>X</button>
        </div>
          </div>
      )}

    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 relative'>
      {series.map((serieId) => (
        <div key={serieId.id}   className={`relative transition-all duration-500 overflow-visible ${
    serieId.id === DetailsID ? 'scale-[1.03]' : 'scale-100'
  }`}  onMouseEnter={() => viewDetails(serieId.id)}
      onMouseLeave={() => viewDetails(null)}>
          <img key={serieId.id} src={`https://image.tmdb.org/t/p/w500${serieId.backdrop_path}`} alt={serieId.name} className='h-[300px] object-cover rounded-lg shadow-md cursor-pointer' />
          
        <div
          className="absolute bottom-0 w-full bg-[var(--bgSecondary)]/90 flex flex-col items-center transition-all duration-300  rounded-b-lg py-2 px-2"
          style={{
          maxHeight: serieId.id === DetailsID ? '300px' : 'auto',
          opacity: serieId.id === DetailsID ? 1 : 0.9,
          }}
        >
          <span className="font-semibold py-1">{serieId.name}</span>

         <div
          className={`transition-all duration-500 ${
            serieId.id === DetailsID
              ? 'opacity-100 translate-y-0 mt-2'
              : 'opacity-0 -translate-y-3 h-0 overflow-hidden'
              }`}
            >
            <CardDetails serieId={serieId.id} />
          </div>

          {/* <button
            className="cursor-pointer w-full p-1 font-medium bg-[var(--bgColor)] hover:bg-[var(--buttomActive)] transition-colors"
            onClick={() => viewTrailer(serieId.id)}
            style={{
              opacity: serieId.id === DetailsID ? '0' : '100',
            }}
          >
            Trailer
          </button> */}
        </div>
          </div>
          ))
        }
    </div>
    </>
    )
}
