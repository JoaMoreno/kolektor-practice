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

  it('should be retired', () => {
    component.age = 66;
    fixture.detectChanges();
    expect(component.isRetired()).toBeTrue();
  });

  it('should not be retired', () => {
    component.age = 48;
    fixture.detectChanges();
    expect(component.isRetired()).toBeFalse();
  });

  it('should have <p> with "banner works!"', () => {
    component.age = 66;
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const div = bannerElement.querySelector('p');
    expect(div.textContent).toEqual('You are old');
  });
});
