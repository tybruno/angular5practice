import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// this must be imported in app.module to use it.
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  // this method can be accessed in any component
  changeGoal(goal) {
    this.goals.next(goal);
  }
}
