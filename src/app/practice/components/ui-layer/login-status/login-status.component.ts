import { Component, OnInit, Input } from '@angular/core';

interface ActionsI{
  name: string;
  goTo: string;
  separatedTop?: boolean;
  separatedBottom?: boolean;
}

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  @Input() isLogged: boolean;
  @Input() rightAligned: boolean;
  @Input() actions: ActionsI[];

  constructor() { }

  ngOnInit(): void {
  }

  get buttonMsgStatus(){
    return this.isLogged
    ? "Perfil"
    : "Invitado"
  }

}
