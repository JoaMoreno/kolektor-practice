import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStatusComponent } from './login-status.component';

describe('LoginStatusComponent', () => {
  let component: LoginStatusComponent;
  let fixture: ComponentFixture<LoginStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should be Invitado', () => {
    component.isLogged = true;
    fixture.detectChanges();
    expect(component.buttonMsgStatus).toEqual('Invitado');
  });

  it('should be Perfil', () => {
    component.isLogged = true;
    fixture.detectChanges();
    expect(component.buttonMsgStatus).toEqual('Perfil');
  });

  it('should be guest Text', () => {
    component.isLogged = false;
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const div = bannerElement.querySelector('.msgStatus__');
    expect(div.textContent).toEqual('Invitado');
  });

  it('should be logged Text', () => {
    component.isLogged = true;
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const div = bannerElement.querySelector('.msgStatus__');
    expect(div.textContent).toEqual('Perfil');
  });

  xit('should be contain class Right', () => {

  });
});
