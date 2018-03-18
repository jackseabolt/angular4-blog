import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './checked.component.html', 
    selector: 'checked', 
    styleUrls: ['./checked.component.css']
})

export class CheckedComponent {
    @Input('item') item; 
    @Output() delete = new EventEmitter()

    onDelete() {
        this.delete.emit(this.item.value)
    }
}