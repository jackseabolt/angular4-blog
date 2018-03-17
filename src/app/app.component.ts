import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [{
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

  handleDelete($event) {
    this.items = this.items.filter(item => {
      return item.value !== $event 
    })
  }

  handleCheck($event) {
    this.items = this.items.map(item => {
      if (item.value === $event) {
        item.checked = true
        return item; 
      }
      return item
    })
  }
}
