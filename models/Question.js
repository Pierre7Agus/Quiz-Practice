class Question{

    /**
     * 
     * @param {String} question the string is the text of the question
     * @param {[string]} choices receive an Array with the options.
     * @param {String} answer receive a string, this is the correct answer.
     */

    constructor(question,choices,answer){
        this.question=question;
        this.choices = choices;
        this.answer=answer;
    }

}