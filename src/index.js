import './styles/style.css';
import './modules/StouGame.js';
import genBoard from './modules/Gen-Board.js';
import addElement from './modules/addElement.js';
import getBoard from './modules/Get-Board.js';

// const id = 'QgHcOIXPyYQqqLJkTuJF';
const id = 'QgHcOIXPyYQqqLJkTuJ1'; //false Id
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const submitBtn = document.getElementById('input-button');
const inputScore = document.getElementById('input-score');
const inputName = document.getElementById('input-name');
const updateBtn = document.getElementById('btnUpdate');

// eslint-disable-next-line
submitBtn.addEventListener('click', async () => {
  if (inputScore.value === '' || inputName.value === '') {
    return;
  }

  const name = inputName.value;
  const score = inputScore.value;
  // inputName.value = ''; inputScore.value = '';

  await addElement(name, score, id, url);
  await getBoard(genBoard, id, url);
});

updateBtn.addEventListener('click', () => {
  getBoard(genBoard, id, url);
});
