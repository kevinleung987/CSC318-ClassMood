import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { LecturerMainComponent } from './lecturer-main/lecturer-main.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartMenuComponent },
  { path: 'student', component: StudentMainComponent },
  { path: 'lecturer', component: LecturerMainComponent },
  { path: 'settings', component: SettingsMenuComponent },
  { path: 'questions', component: QuestionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
