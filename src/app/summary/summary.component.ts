import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Answer } from '../answer.model';
import { Question } from '../question.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.questions;
  }

  formatAnswer(question: Question){
    return this.questionService.getAnswer(question.id).value;
  }

}
