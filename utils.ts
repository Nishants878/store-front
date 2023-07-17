import createCache from '@emotion/cache';


//imported from env file
const IP = `https://fakestoreapi.com/`

export const fetchQueries = (query?: any) => {
    return fetch(`${IP}${query}`)
      .then(response => response.json())
      .then(data => data);
  };


const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;