class Quiz{

    score=0;
    index=0;

    /**
     * 
     * @param {[Question]} questions it receives an array, where each element is an object Question
     */

    constructor(questions){
        this.questions=questions;
    }


    /**
     * 
     * @returns return a Question object of the array of Question objects
     */

    getCurrentQuestion(){
        return this.questions[this.index];
    }
}
