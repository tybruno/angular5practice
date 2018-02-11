import { Component, OnInit } from '@angular/core';
import { trigger, style , transition, animate , keyframes , query , stagger } from '@angular/animations';
// Other imports removed for brevity
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [ // where you define your animations

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
  goals = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = ''; // clears out text once its been submitted.
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    this.itemCount = this.itemCount - 1;
  }

}
