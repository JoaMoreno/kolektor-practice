import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-age-testing',
  templateUrl: './age-testing.component.html',
  styleUrls: ['./age-testing.component.sass']
})
export class AgeTestingComponent implements OnInit {

  constructor() { }

  age: any;

  ngOnInit(): void {
  }

  verifyAge(){
    if(this.age>65) return true
    else return false
  }

}
