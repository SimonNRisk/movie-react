const API_KEY = 'cef92385f9388bc9345a615998375bc6';
const BASE_URL = 'https://api.themoviedb.org/3';
//async => asynchronous. Itll take a minute for use to get our response so we await it
export const getPopularMovies = async () => {
  //fetch sends network request
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};

export const searchMovies = async (query: string) => {
  //fetch sends network request
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
