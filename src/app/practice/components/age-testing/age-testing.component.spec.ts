import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeTestingComponent } from './age-testing.component';

describe('AgeTestingComponent', () => {
  let component: AgeTestingComponent;
  let fixture: ComponentFixture<AgeTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Age verification old', () => {
    expect(component.verifyAge()).toBeTruthy();
  });

  it('Age verification young', () => {
    expect(component.verifyAge()).toBeFalse();
  });
});
