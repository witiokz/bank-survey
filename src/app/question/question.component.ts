import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Question } from '../question.model';
import { QuestionType } from '../questiontype';
import { Answer } from '../answer.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionForm: FormGroup;

  activeQuestion: Question;
  answer: Answer;
  step = 1;
  maxStepsCount: number;

  private questionType = QuestionType;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.maxStepsCount = this.questionService.getMaxStepsCount;
    this.load();
  }

  prev() {
    this.step--;
    this.load();
  }

  next() {
    if(!this.questionForm.valid){
      this.questionForm.get('questionValue').markAsTouched();
      return;
    }
    this.step++;
    this.questionService.saveAnswer(this.answer);
    this.load();
  }

  summary(){
    this.questionService.saveAnswer(this.answer);
  }

  load(){

    this.activeQuestion = this.questionService.getQuestionByStep(this.step);
    this.answer = { questionId: this.activeQuestion.id } as Answer;

    this.processDependency();

    const answerByQuestionId = this.questionService.getAnswer(this.activeQuestion.id);
    if (answerByQuestionId) {
      this.answer.value = answerByQuestionId.value;
    }

    this.questionForm = new FormGroup({
      questionValue: new FormControl(this.answer.value, [
        Validators.required
      ])
    });
  }

  processDependency(){
    if(this.activeQuestion.dependsOnId){
      const answer = this.questionService.getAnswer(this.activeQuestion.dependsOnId);
      if(answer.value > 10 && answer.value < 100 && this.activeQuestion.items.length){
        if (this.activeQuestion.items[0].values.length > 2){
         setTimeout(() => {
          this.answer.value = this.activeQuestion.items[0].values[2];
         }, 0);
        }
      }
    }
  }

  get questionValue() { return this.questionForm.get('questionValue'); }
}
