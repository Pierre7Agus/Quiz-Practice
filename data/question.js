import {data} from './data.js';
import Question from '../models/Question.js';

export const questions = data.map(item=>{
    return new Question(item.question,item.choices,item.answer);
});
