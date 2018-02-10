import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],

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

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText = ''; // clears out text once its been submitted.
    this.itemCount = this.goals.length;
  }

}
