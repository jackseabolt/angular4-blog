import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './form.component.html', 
    selector: 'form', 
    styleUrls: ['./form.component.css']
})

export class FormComponent {
    @Output() add = new EventEmitter(); 

    handleAdd(item){
        event.preventDefault()
        if (item.value.length < 1) {
            this.validationMessage = "A value is required"; 
        }
        else if (item.value.length > 12) {
            this.validationMessage = "12 character limit"; 
        }
        else {
            this.add.emit(item.value); 
            item.value = ""; 
            this.validationMessage = null; 
        }
    }

    validationMessage = null; 
}