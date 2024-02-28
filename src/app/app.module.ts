import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {Task1Component} from './task-1/task-1.component';
import {Task2Component} from './task-2/task-2.component';
import {Task3Component} from './task-3/task-3.component';
import {Task4Component} from './task-4/task-4.component';
import {PlaceholderDirective} from "./task-3/placeholder.directive";

const routes: Routes = [
  {path: '', redirectTo: 'task-1', pathMatch: 'full'},
  {path: 'task-1', component: Task1Component},
  {path: 'task-2', component: Task2Component},
  {path: 'task-3', component: Task3Component},
  {path: 'task-4', component: Task4Component},
];

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    DynamicComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    provideRouter(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
