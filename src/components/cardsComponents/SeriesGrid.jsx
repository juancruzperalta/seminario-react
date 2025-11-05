'use client'
import { useEffect, useState } from 'react'
import { getPopularSeries } from '../../api/tmdb.js'
import { SeriesCard } from './SeriesCard.jsx'

export default function SeriesGrid() {
  const [serieTV, setSerieTV] = useState([]);

  useEffect(() => {
    getPopularSeries().then(setSerieTV)
  }, [])

  return (
    <div className='justify-center items-center flex flex-col'>
      <h2 className='text-md font-semibold uppercase text-[#0ed395]'>Populars</h2>
      <SeriesCard series={serieTV} />
    </div>
  )
}