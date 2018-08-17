import { Injectable } from '@angular/core';
//import { BehaviourSubject } from 'rxjs/BehaviourSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private goals = new BehaviourSubject<any>(['The initial goal', 'Another silly life goal']);
  //goal = this.goals.asObservable();
  
  constructor() { }

 /* changeGoal(goal){
  		this.goals.next(goal);
  }*/
}
