import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    })
  }

  handleAdd($event) {
    let newItems = this.unchecked.concat([{
      value: $event, 
      checked: false
    }])
    return this.unchecked = newItems
  }

  handleCheck($event) {
    this.unchecked = this.unchecked.map(item => {
      if (item.value === $event) {
        item.checked = !item.checked
        return item; 
      }
      return item
    })
  }
}
