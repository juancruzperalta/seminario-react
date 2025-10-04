const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  const data = await response.json();
  return data.results;
}