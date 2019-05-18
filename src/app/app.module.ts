import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';

import { MatButtonModule,
         MatCheckboxModule,
         MatGridListModule,
         MatCardModule,
         MatDividerModule} from '@angular/material';
import { TypeComponent } from './question/type/type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionComponent,
    SummaryComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
