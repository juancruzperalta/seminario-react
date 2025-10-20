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
      {console.log(detailsID)}
      <p>{detailsID.id}</p>
    </>
  )
}
