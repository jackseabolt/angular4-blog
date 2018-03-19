import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  
  unchecked: any = [{
    value: 'Example 1', 
    checked: false
  },
  {
    value: 'Example 2', 
    checked: false
  },
  {
    value: 'Example 3', 
    checked: false
  }];

  checked: any = [{
    value: 'Example 4', 
    checked: true
  }];

  handleDelete($event) {
    this.unchecked = this.unchecked.filter(item => {
      return item.value !== $event 
    });
    this.checked = this.checked.filter(item => {
      return item.value !== $event 
    });
  }

  handleAdd($event) {
    let newItems = this.unchecked.concat([{
      value: $event, 
      checked: false
    }])
    return this.unchecked = newItems
  }

  handleCheck($event) {
    this.unchecked = this.unchecked.filter(item => {
      return item.value !== $event 
    })
    this.checked = this.checked.concat([{
      value: $event, 
      checked: true
    }])
  }
}
