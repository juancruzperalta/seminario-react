import React, { useState } from 'react'
import { CardDetails } from './CardDetails'
import { TrailerModal } from '../trailerComponents/trailerModal';

export const SeriesCard = ({ series }) => {
    const [DetailsID, setDetailsID] = useState(null)
  const [TrailerID, setTrailerID] = useState()
  function viewDetails(serieId) {
    setDetailsID(serieId);
  }
  function viewTrailer(idSerie) {
    setTrailerID(idSerie);
  }
  return (
    <>
      {TrailerID && <TrailerModal trailerID={TrailerID} />}
      
    <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 relative '>
      {series.map((serieId) => (
        <div key={serieId.id}   className={`relative transition-all duration-500 overflow-visible ${
    serieId.id === DetailsID ? 'scale-[1.03]' : 'scale-100'
  }`}  onMouseEnter={() => viewDetails(serieId.id)}
      onMouseLeave={() => viewDetails(null)}>
          <img key={serieId.id} src={`https://image.tmdb.org/t/p/w500${serieId.backdrop_path}`} alt={serieId.name} className='h-[300px] object-cover rounded-lg shadow-md cursor-pointer' />

        <div
          className="absolute bottom-0 w-full bg-[var(--bgSecondary)]/90 flex flex-col items-center transition-all duration-300  rounded-b-lg py-2 px-2 border-t-1 border-gray-300/45 shadow-md max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
            style={{
              display: '-webkit-box',
    WebkitLineClamp: serieId.id === DetailsID ? 6 : 1, // cantidad de líneas visibles
    WebkitBoxOrient: 'vertical',
          maxHeight: serieId.id === DetailsID ? '300px' : '50px',
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
              {serieId.id === DetailsID && (
                <CardDetails
                  serieId={serieId.id}
                />
              )}
            <button className='p-0.5 w-full bg-white text-gray-900 uppercase hover:bg-gray-300 cursor-pointer' onClick={() => viewTrailer(serieId.id)}>View Trailer</button>
          </div>


        </div>
          </div>
          ))
        }
    </div>
    </>
    )
}
