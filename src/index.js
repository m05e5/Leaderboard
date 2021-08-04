/*eslint-disable*/
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import Scores from './scores';

const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tZwzoWVLBuKSP71uLKIA/scores';
const refreshBtn = document.getElementById('refreshBtn');
const formSubmit = document.getElementById('form-submit');
const x = document.getElementById('toast');

const myScores = new Scores();

const drawScore = (scoress) => {
  let i = 0;
  const scores = document.getElementById('scores');
  const liToRemove = document.querySelectorAll('#scores li');
  liToRemove.forEach((item) => {
    item.remove();
  });
  scores.classList.add('black-border');
  scoress.scoreList.forEach((score) => {
    const li = document.createElement('li');
    if (i % 2 === 0) {
      li.className = 'dark-bg';
    }
    i += 1;
    li.classList.add('score');
    li.innerHTML = `<p>${score.user} :</p><p> ${score.score}</p>`;
    scores.appendChild(li);
  });
};

formSubmit.onclick = (e) => {
  e.preventDefault();
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  const params = `user=${inputName.value}&score=${inputScore.value}`;
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      alert(request.responseText);
    }
  };
  request.send(params);
  x.className = 'show';
  setTimeout(() => { x.className = x.className.replace('show', ''); }, 4000);
  setTimeout(async () => {
    await myScores.getScore();
    drawScore(myScores);
  }, 5000);
};

refreshBtn.onclick = async () => {
  x.className = 'show';
  setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  await myScores.getScore();
  drawScore(myScores);
};

const init = async () => {
  await myScores.getScore();
  drawScore(myScores);
};
/* eslint-disable*/
onload = init();
/* eslint-enable */