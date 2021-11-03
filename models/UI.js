import Question from './Question.js';
import Quiz from './Quiz.js';

class UI{
    constructor(){}

    showQuestion(text){
        const question = document.getElementById('title');
        question.innerText = text;
    }
}