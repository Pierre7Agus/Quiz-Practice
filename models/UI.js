export default class UI{
    constructor(){}

    showQuestion(text){
        const title = document.getElementById('question');
        title.innerText = text;
    }


    showChoices(choices, callback){
        const options = document.getElementById('choices');
        options.innerHTML='';
        choices.forEach((elemento)=>{
            const button = document.createElement('button');
            button.innerText= elemento;
            button.addEventListener('click',(event)=>{
                callback(event.target.innerText);
            });
            button.classList.add('button');
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