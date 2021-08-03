/*eslint-disable*/
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import Scores from './scores';

const updateScore = () => {
  const myScores = new Scores();
  let i = 0;
  const scores = document.getElementById('scores');
  scores.classList.add('black-border');
  myScores.scoreList.forEach((score) => {
    const li = document.createElement('li');
    if (i % 2 === 0) {
      li.className = 'dark-bg';
    }
    i += 1;
    li.classList.add('score');
    li.innerHTML = `<p>${score.name}: ${score.score}</p>`;
    scores.appendChild(li);
  });
}
updateScore();
