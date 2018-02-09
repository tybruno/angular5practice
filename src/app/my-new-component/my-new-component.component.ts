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

  constructor() { }

  ngOnInit() {
  }

}
