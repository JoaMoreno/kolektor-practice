import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-age-testing',
  templateUrl: './age-testing.component.html',
  styleUrls: ['./age-testing.component.scss']
})
export class AgeTestingComponent implements OnInit {

  public age: number

  constructor() { }

  ngOnInit(): void {
  }

  isRetired(){
    if(this.age>65) return true
    else return false
  }

}
