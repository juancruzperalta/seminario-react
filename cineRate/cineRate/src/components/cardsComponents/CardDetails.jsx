import React, { useEffect, useState } from 'react'
import { getDetailsOfSerie } from '../../api/tmdb';

export const CardDetails = (serieId) => {
  const [detailsID, setDetailsID] = useState(serieId)
  useEffect(() => {
    async function fetchDetails() {
      const key = await getDetailsOfSerie(serieId);
      setDetailsID(key);
    }
    fetchDetails()
  }, [serieId])
  
  return (
    <>
      <div className='relative max-h-full z-10'>
        
        <div className="pt-1 flex flex-col w-full justify-between text-[0.9rem] text-gray-300">
    <span className='font-semibold'>(
      {detailsID.first_air_date ? new Date(detailsID.first_air_date).getFullYear() : 'Undefined'})
              </span>
          <ul className='flex items-center justify-center gap-1 '>{detailsID?.genres?.map(gen => (
        <li className="bg-[var(--colorAccent)] p-[0.12rem] rounded-sm" key={gen.id}>{gen.name}</li>
        ))}
        </ul>
       </div>
       <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-300">
        <ul className='flex items-center justify-center gap-1'>Languages: {detailsID?.languages?.map(lang => (
          <span key={lang}>[{lang}]</span>
        ))}</ul>
        <p>Origin Country: <span className='font-semibold'>{detailsID?.origin_country?.map(orig => (<span key={orig}>{orig}</span>))}</span></p>
        </div>
        <div className='flex items-center justify-center  gap-2 text-sm text-gray-300'>
        <p className='flex flex-col'>Seasons: <span className='font-semibold'>{detailsID?.number_of_seasons}</span></p>
        <p className='flex flex-col'>Episodes: <span className='font-semibold'>{detailsID?.number_of_episodes}</span></p>
        <p className='flex flex-col'>Status: <span className="font-semibold">{detailsID?.status}</span></p>
        </div>
        {/* <div className='flex flex-col'>
          <span className='font-semibold'>Overview</span>
          <p>{detailsID?.overview}</p></div> */}
          </div>
    </>
  )
}
