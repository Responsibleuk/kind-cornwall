/* jshint esversion: 8 */

const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// see readme for credit
// tells users their final score
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 100;

finalScore.innerText = mostRecentScore;

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
       
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

    
};