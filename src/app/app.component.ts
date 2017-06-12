import { Component } from '@angular/core';

export class List {
  topic: string;
  item: string;
}

const LISTS: List[] = [
  { topic: 'breads', item: 'cinnamon rolls' },
  { topic: 'fruit', item: 'apples' },
  { topic: 'dairy', item: 'gouda cheese' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="lists" *ngFor="let list of lists">
      <span class="topic">{{list.topic}}</span>
      <ul>
        <li class="item" 
          (click)="onSelect(list)" 
          [class.selected]="list === selectedList">
          {{list.item}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedList">
      <div>
        <label>Topic: </label>{{selectedList.topic}}
      </div>
      <div>
        <label>Item: </label>
        <input [(ngModel)]="selectedList.item" placeholder=name>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .lists {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
      background-color: #EEE;
    }
    .lists li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .lists li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .lists li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .lists .text {
      position: relative;
      top: -3px;
    }
    .lists .topic {
      display: inline-block;
      padding: 1em;
      position: relative;
      font-weight: bold;
      text-transform: uppercase;
    }
    .lists .item {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  { 
  title = 'Fancy Schmancy Lists';
  lists = LISTS;
  selectedList: List;

  onSelect(list: List): void {
    this.selectedList = list;
  }
}
