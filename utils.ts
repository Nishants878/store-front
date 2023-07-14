

//imported from env file
const IP = `https://fakestoreapi.com/`

export const fetchQueries = (query?: any) => {
    return fetch(`${IP}${query}`)
      .then(response => response.json())
      .then(data => data);
  };