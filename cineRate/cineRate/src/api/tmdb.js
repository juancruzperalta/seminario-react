const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularSeries() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  const data = await response.json();
  return data.results;
}
export async function getTrailerSerie(serieId) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/videos?language=es-ES`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  const data = await response.json();
  const trailer = data.results.find(
    (v) => v.site === 'YouTube' && v.type === 'Trailer'
  );

  return trailer ? trailer.key : null;
}

export async function getDetailsOfSerie({serieId}) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  const data = await response.json();
  return data;
}
export async function getTopRatedOfSerie() {
  
  const response = await 
fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  const data = await response.json();
  return data;
}