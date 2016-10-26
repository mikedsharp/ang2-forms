import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import {forbiddenNameValidator} from './forbidden-name.directive'; 

@Component({
    selector: 'form-reactive-new',
    templateUrl: 'contact-form-reactive-new.component.html'
})
export class ReactiveFormNewComponent implements OnInit {

    formModel = {
        name: '', 
        email: '',
        message: ''
    }; 
    contactForm:FormGroup;  

    buildForm(){
        this.contactForm = this.fb.group({
            'name': [this.formModel.name, [Validators.required, forbiddenNameValidator(/mike/i)]], 
            'email': [this.formModel.email, [Validators.required]], 
            'message': [this.formModel.message, [Validators.required]], 
        });  

        this.contactForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any){
        // we would use this if we want to update validation messages each pass
        if(!this.contactForm){
            return; 
        }
        const form = this.contactForm; 
    }

    onSubmit(){
        console.log('form submitted!');
    }

    constructor(private fb:FormBuilder) { }

    ngOnInit() { 
        this.buildForm(); 
    }
}