const getBoard = async (printf, id, url) => {
  const result = await fetch(`${url}/games/${id}/scores/`, { method: 'GET' });

  result.json().then((response) => printf(response.result));
};

export default getBoard;
