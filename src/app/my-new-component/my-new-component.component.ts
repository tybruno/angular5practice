import { Component, OnInit } from '@angular/core';
import { trigger, style , transition, animate , keyframes , query , stagger } from '@angular/animations';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [ //where you define your animations

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
        ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]

  // used for inline CSS
  // styles: [`
  //   p {font-weight: bold}
  //   div{color:grey}
  // `]
})
export class MyNewComponentComponent implements OnInit {

  itemCount:number;
  btnText: string = 'Add Item';
  goalText: string = 'My first life goal';
  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = ''; // clears out text once its been submitted.
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }

}
