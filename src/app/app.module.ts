import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContactFormTemplateComponent} from './contact-form/contact-form-template.component'; 
import {ContactFormReactiveComponent} from './contact-form/contact-form-reactive.component'; 
import {StartsWithValidatorDirective} from './contact-form/starts-with-validator.directive'; 


@NgModule({
  declarations: [
    AppComponent, 
    ContactFormTemplateComponent, 
    ContactFormReactiveComponent, 
    StartsWithValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
