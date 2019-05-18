import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'questions', component: QuestionComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
