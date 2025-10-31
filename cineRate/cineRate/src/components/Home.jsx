import React, { useEffect, useState } from 'react'
import { getDetailsOfSerie, getTopRatedOfSerie } from '../api/tmdb';

export const Home = () => {
  const [currentSerie, setCurrentSerie] = useState();
  const [currentSerieDetails, setCurrentSerieDetails] = useState();

  const serieOne = currentSerie?.results?.[0];
  useEffect(() => {
    async function getRated() {
      const key = await getTopRatedOfSerie();
      setCurrentSerie(key);
    }
    const timer = setTimeout(() => {
    getRated();
    }, 1000);
    return () => clearTimeout(timer);
  }, [])
  useEffect(() => {
    async function getDetails() {
      if (serieOne?.id) {
        const detailsData = await getDetailsOfSerie({ serieId: serieOne.id });
        setCurrentSerieDetails(detailsData);
      }
    }

    getDetails();
  }, [serieOne]);

  return (
    // <div className="flex items-center justify-center flex-col w-[100%] mt-8">
      /* <h1 className="font-bold text-6xl tracking-widest">CineRate</h1>
      <p className="text-xl w-sm text-[var(--textSecondary)]">Discover, rate, and share your love for movies
      </p>   */
    // <h2>Top one rated today</h2>
    <>
      <div className='relative heroRight heroLeft  flex items-center justify-center w-full h-[100vh] overflow-hidden p-0 m-0  shadow-2xl shadow-gray-800 backdrop-brightness-[30%]
'>
        <img className="object-cover opacity-80 absolute top-0 left-0 w-full h-full overflow-hidden" src={`https://image.tmdb.org/t/p/original/${serieOne?.backdrop_path}`} alt={serieOne?.name} />
        
        <div className="text-left text-[0.9rem]  z-20 text-gray-300  absolute  left-5 top-auto   mt-auto mb-auto gap-2 flex flex-col  h-full justify-end bottom-3 max-w-[1200px] mx-auto px-5 pb-3  inset-0 ">
          <h2 className='text-md font-semibold uppercase text-[#0ed395]'>Top one rated today</h2>
            <h3 className='text-4xl font-bold uppercase text-white leading-tight'>{serieOne?.name}</h3>
          <div className='flex flex-wrap items-center gap-3 text-sm'>
          <span className='font-semibold text-black bg-yellow-500 text-[1rem] border-1 border-gray-300 p-[0.2rem] m-0 pt-0 pb-0 rounded-sm'>{serieOne?.vote_average?.toFixed(1)}</span>
            <span className='font-semibold text-gray-200/95 text-[1rem] border-1 border-gray-300 p-[0.2rem] m-0 pt-0 pb-0 rounded-sm'>{serieOne?.first_air_date ? new Date(serieOne?.first_air_date).getFullYear() : 'Undefined'}</span>
            <span className='font-semibold text-gray-200/95 text-[1rem] border-1 border-gray-300 p-[0.2rem] m-0 pt-0 pb-0 rounded-sm'>{ currentSerieDetails?.origin_country?.[0]}</span>
            <span className='font-semibold text-gray-200/95 text-[1rem] border-1 border-gray-300 p-[0.2rem] m-0 pt-0 pb-0 rounded-sm'>{currentSerieDetails?.number_of_seasons} Seasons
            </span>
            </div>
          <p className=' text-[1rem] text-gray-200  line-clamp-7 max-w-[360px]'>{serieOne?.overview}</p>
          <div className='flex flex-col items-start mt-3 font-semibold text-gray-200'>
            <span>
            {currentSerieDetails?.created_by?.map((author, index) => (
              <span key={author.id}>
                {index > 0 && ", "} {author.name}
              </span>
            ))}
            </span>
            <span>
             {currentSerieDetails?.genres?.map((genres, index) =>  (
               <span key={genres.id}>
                {index > 0 && ", "} {genres.name}
              </span>
            ))}
            </span>
          </div>
          <div className='gap-4 flex flex-row items-center'>
            <button className='p-2 bg-white text-gray-900 uppercase hover:bg-gray-300 cursor-pointer '>View Trailer</button>
            <button className='p-2 text-white bg-gray-300/30 uppercase hover:bg-gray-700/60 cursor-pointer  backdrop-blur-md '>More Information</button>
          </div>
       </div>
      </div>
      </>
    // </div>
  )
}