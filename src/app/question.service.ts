import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QuestionItem } from './questionItem.model';
import { QuestionType } from './questiontype';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [
    {
      id: 1,
      type: QuestionType.Number,
      text: 'Please provide your sallary',
      isMandataory: true,
      step: 1,
      items: [{
          id: 10,
          text: 'Sallary'
        }
      ] as QuestionItem[]
    } as Question,
    {
      id: 2,
      type: QuestionType.Dropdown,
      text: 'Loan Sum',
      isMandataory: true,
      dependsOnId : 1,
      step: 2,
      items: [{
          id: 20,
          text: 'Sum',
          values: [300, 900, 1800]
        }
      ] as QuestionItem[]
    } as Question,
    {
      id: 3,
      type: QuestionType.Text,
      text: 'Please provide your full name',
      isMandataory: true,
      step: 3,
      items: [{
          id: 30,
          text: 'Full name'
        }
      ] as QuestionItem[]
    } as Question,
    {
      id: 4,
      type: QuestionType.Radio,
      text: 'Loan payment day',
      isMandataory: true,
      step: 4,
      items: [{
          id: 40,
          text: 'Day',
          values: [3, 7, 12, 17]
        }
      ] as QuestionItem[]
    } as Question
  ];

  answers: Answer[] = [];

  constructor() { }

  getQuestionByStep(step: number): Question{
    return this.questions.find(i => i.step === step);
  }

  saveAnswer(answer: Answer){
    const savedAnswer = this.getAnswer(answer.questionId);
    if(savedAnswer) {
      savedAnswer.value = answer.value;
    } else {
      this.answers.push(answer)
    }
  }

  getAnswer(questionId: number){
    return this.answers.find(i => i.questionId === questionId);
  }

  get getMaxStepsCount(){
    return 4;
  }

}
