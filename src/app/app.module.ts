import { SignupFormComponent } from './signup-form/signup-form.component';

import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService // Dependency injection 
    //angular create an instance for all of other classes which need this service that we call 'Singleton'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
