import { Component } from '@angular/core';

export class List {
  name: string;
  topic: string;
  item: {
    name: string;
    price: number;
  };
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{list.name}}</h1>
  <h2>{{list.topic}}</h2>
  <div>
    <label>item: </label>
    <input [(ngModel)]="list.item.name" placeholder=name>
  </div>
    <div>
    <label>item: </label>
    <input [(ngModel)]="list.item.price" placeholder=price>
  </div>
  `,
})

export class AppComponent  { 
  list: List = {
    name: 'Fancy Schmancy List',
    topic: 'Groceries',
    item: {
      name: 'ginger snap ice cream',
      price: 3.99
    }
  };
 }
