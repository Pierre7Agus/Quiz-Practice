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

    /**
     * 
     * @param {String} answer receive a string, this string is the answer of the user.
     * @returns {Boolean} return true, if the user answers correctly
     */

    correctAnswer(answer){
        return this.answer === answer;
    }

}