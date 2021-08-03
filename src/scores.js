const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tZwzoWVLBuKSP71uLKIA/scores';

export default class Scores {
  constructor() {
    this.scoreList = [];
  }

  async getScore() {
    const scorePromis = new Promise((myResolve) => {
      request.open('GET', requestURL);
      request.onload = () => {
        if (request.status === 200) {
          myResolve(request.response);
          console.log(request.response);
        } else {
          myResolve('Error');
        }
      };
      request.send();
    });
    const list = JSON.parse(await scorePromis);
    this.scoreList = list.result;
  }
}