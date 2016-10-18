import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
    ratings = ['worse than death', 'adequate', 'not bad I guess', 'epic'];
    form = {
        name: '', 
        email: '', 
        message: '', 
        rating: ''
    }
    constructor() { }

    ngOnInit() { }
}