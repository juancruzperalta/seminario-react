import React, { useRef, useState } from 'react'
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
  const serieRef = useRef(null);
  
  const scrollToLeft = () => {
    serieRef.current.scrollBy({left: -600, behavitor: 'smooth'})
  }

  const scrollToRight = () => {
    serieRef.current.scrollBy({left: 600, behavitor: 'smooth'})
  }

  return (
    <>
      {TrailerID && <TrailerModal trailerID={TrailerID} />}
      
    <div className='flex flex-row relative '>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full px-3 py-2 hover:bg-black/80"
        onClick={scrollToLeft}
        > 
        ‹
        </button>
        <div className='flex gap-4 overflow-hidden scroll-smooth px-10 py-4 max-w-[1200px]' ref={serieRef}>

      {series.map((serieId) => (
        <div key={serieId.id}   className={`relative min-w-[200px] transition-all duration-500 overflow-hidden ${
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
              <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full px-3 py-2 hover:bg-black/80" 
          onClick={scrollToRight}
      >
        ›
      </button>
    </div>
    </>
    )
}
