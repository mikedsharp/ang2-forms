import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-form-template',
    templateUrl: 'contact-form-template.component.html'
})
export class ContactFormTemplateComponent implements OnInit {
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