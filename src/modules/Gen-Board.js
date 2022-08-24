const leaderBoard = document.getElementById('scoreTable');

const genBoard = ((array) => {
  leaderBoard.innerHTML = array.map((items) => `
<li>${items.user}: ${items.score}</li>
`).join('');
});

export default genBoard;