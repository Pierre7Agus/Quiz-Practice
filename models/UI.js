class UI{
    constructor(){}

    showQuestion(text){
        const question = document.getElementById('title');
        question.innerText = text;
    }


    showChoices(choices, callback){
        const options = document.getElementById('choices');
        choices.forEach((elemento)=>{
            const button = document.createElement('button');
            button.innerText= elemento;
            button.addEventListener('click',(event)=>{
                callback(event.target.innerText);
            });
            options.append(button);
        });
    }

    showProgress(index,total){
        const progress = document.getElementById('progress');
        progress.innerText=`Pregunta ${index} de ${total} preguntas`;

    }


    /**
     * 
     * @param {number} score recibe el puntaje total
     */
     showEnd(score){
        const screenEnd = `
        <h1>Resultado Final:</h1>
        <h2>Tu puntaje es: ${score}</h2>
        `;

        const element = document.getElementById('quiz');
        element.innerHTML=screenEnd;
    }
}