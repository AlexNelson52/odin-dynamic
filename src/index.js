import generateJoke from "./gnerateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;
console.log(generateJoke());

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke);

generateJoke();