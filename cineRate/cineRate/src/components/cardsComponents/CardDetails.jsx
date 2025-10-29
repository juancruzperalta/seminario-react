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
      <div className='max-h-full z-10'>
        <div className="pt-1 flex flex-col w-full justify-between text-[0.9rem] text-gray-300   ">
          <span className='font-semibold p-0 m-0' >(
            {detailsID.first_air_date ? new Date(detailsID.first_air_date).getFullYear() : 'Undefined'})
                    </span>
              
          <ul className='flex items-center justify-center gap-1 '>{detailsID?.genres?.map((gen, index) => (
            index <= 3 && (<li className="bg-[var(--colorAccent)]  max-h-6 font-semibold p-[0.16rem] rounded-sm text-[#0B0F19]  max-w-full overflow-hidden"  key={gen.id}
              > {gen.name}</li>
            )
          ))}
        </ul>
       </div>
       <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-300">
          <ul className='flex items-center justify-center gap-1 font-semibold'>Languages{(detailsID?.languages?.length > 0 ? detailsID.languages : detailsID?.origin_country || ['unknown']).map((lang) => (
                  <span className='uppercase font-semibold text-[var(--colorAccent)]' key={lang}>
              [{lang}]
            </span>
              ))
              }
        <p className='font-semibold'>Origin:</p>
            <span className='font-semibold text-[var(--colorAccent)]'>{detailsID?.origin_country?.length > 0 ? (detailsID?.origin_country?.map(orig => (<span key={orig}>{orig}</span>))) : (
                <span  className='uppercase font-semibold text-[var(--colorAccent)]'>unknown</span>
          )
        }</span>
          </ul>
        </div>
        <div className='flex items-center justify-center  gap-2 text-sm text-gray-300'>
        <p className='flex flex-col'>Seasons<span className='font-semibold text-[var(--colorAccent)] max-w-14'>{detailsID?.number_of_seasons}</span></p>
        <p className='flex flex-col'>Episodes<span className='font-semibold text-[var(--colorAccent)] max-w-14'>{detailsID?.number_of_episodes}</span></p>
        <p className='flex flex-col'>Status<span className="font-semibold text-[var(--colorAccent)] max-w-14 overflow-hidden whitespace-nowrap text-ellipsis">{detailsID?.status}</span></p>
        </div>
        {/* <div className='flex flex-col'>
          <span className='font-semibold'>Overview</span>
          <p>{detailsID?.overview}</p></div> */}
          </div>
    </>
  )
}
