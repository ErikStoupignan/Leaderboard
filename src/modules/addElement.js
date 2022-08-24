// Sending to the API's
const addElement = async (name, score, id, url) => {
  const result = await fetch(`${url}/games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${name}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  // eslint-disable-next-line
  result.json().then((response) => console.log(response));
};

export default addElement;