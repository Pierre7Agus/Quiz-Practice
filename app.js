//@ts-check

import UI from './models/UI.js';
import Quiz from './models/Quiz.js';
import {questions} from './data/question.js';


/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */

const renderPage = (quiz,ui) =>{

    if(quiz.isEnded()){
        ui.showEnd(quiz.score);
    }else{

        ui.showQuestion(quiz.getCurrentQuestion().question);
        ui.showChoices(quiz.getCurrentQuestion().choices , (text)=>{

            quiz.getScore(text);
            renderPage(quiz,ui);
        });
        ui.showProgress(quiz.index+1,questions.length);
    }
    
    
    
}


function main(){

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz,ui);

}
main();