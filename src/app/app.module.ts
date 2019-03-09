import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TypeQuestionComponent } from './type-question/type-question.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { LecturerMainComponent } from './lecturer-main/lecturer-main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    QuestionListComponent,
    TypeQuestionComponent,
    StudentMainComponent,
    SettingsMenuComponent,
    LecturerMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
