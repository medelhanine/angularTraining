import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses></courses>
    template: `
    <button (click)="onSave()" class="btn btn-primary">Save</button>`
})
export class CoursesComponent {
    onSave() {
        console.log("button was clicked");
    }
}
