import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses></courses>
    template: `
    <h2>{{ title }}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    </ul>
    ` // string interpolation
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) { // decouple the service from the component
        this.courses = service.getCourses();
    }
}
