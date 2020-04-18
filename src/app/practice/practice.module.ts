import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeTestingComponent } from './components/age-testing/age-testing.component';
import { LoginStatusComponent } from './components/ui-layer/login-status/login-status.component';



@NgModule({
  declarations: [AgeTestingComponent, LoginStatusComponent],
  imports: [
    CommonModule
  ]
})
export class PracticeModule { }
