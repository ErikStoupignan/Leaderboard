// Sending to the API's
const addElement = async (name, score, id, url) => {
  await fetch(`${url}/games/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${name}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addElement;