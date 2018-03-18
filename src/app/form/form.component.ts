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
        this.add.emit(item.value)
    }
}