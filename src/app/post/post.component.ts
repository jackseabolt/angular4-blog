import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
    templateUrl: './post.component.html', 
    selector: 'post'
})

export class PostComponent {
    @Input('item') item; 
    @Output() delete = new EventEmitter()
    @Output() check = new EventEmitter()

    onDelete() {
        this.delete.emit(this.item.value)
    }

    onCheck() {
        this.check.emit(this.item.value)
    }
}