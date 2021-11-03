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
}