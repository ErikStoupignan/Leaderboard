import './style.css';

const arrayTest = [{
  name: 'Federico',
  score: 1,
  id: 0
},{
  name: 'Luis',
  score: 2,
  id: 1
},{
  name: 'Ivan',
  score: 3,
  id: 2
},
{
  name: 'Mauricio',
  score: 4,
  id: 2
}]

document.getElementById('scoreTable').innerHTML = arrayTest.map((items) => 
  `<li>${items.name}: ${items.score}</li>`
).join('');