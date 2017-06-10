import { Component } from '@angular/core';

export class List {
  topic: string;
  item: string;
}

const ITEMS: List[] = [
  { topic: 'breads', item: 'cinnamon rolls' }
  { topic: 'fruit', item: 'apples' }
  { topic: 'dairy', item: 'gouda cheese' }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>Fancy Schmancy List</h1>
    <ul class="items">
      <li *ngFor="let list of lists">
        <span>{{list.topic}}</span> {{list.item}}
      </li>
    </ul>
    <div>
      <label>item: </label>
      <input [(ngModel)]="list.item" placeholder=name>
    </div>
  `,
})

export class AppComponent  { 
  list: List = {
    topic: 'Groceries',
    item: 'thing'
  };
 }
