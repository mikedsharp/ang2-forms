import {Directive ,Input} from '@angular/core'; 
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms'; 

@Directive({
    selector: '[startWith]', 
    providers: [{
        provide: NG_VALIDATORS, 
        useExisting: StartsWithValidatorDirective, 
        multi: true
    }]
})
export class StartsWithValidatorDirective implements Validator {
    @Input('startsWith') expr: string; 

    validate(control: AbstractControl){
        if(control.value && !control.value.startsWith(this.expr)){
            return {'startWith': control.value}; 
        }
        // null means valid, lol
        return null; 
    }
}