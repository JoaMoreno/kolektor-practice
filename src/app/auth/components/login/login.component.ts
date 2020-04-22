import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: IUser;
  LoginProccess: boolean;
  error: boolean = false;

  constructor(private authService: AuthService) {
    this.LoginProccess = false;
  }

  ngOnInit(): void {
    // fake login
    this.user = {
      username: 'JoaMoreno',
      email: 'joamoreno@gmail.com',
      password: '1234',
    };
  }

  login() {
    // login user
    this.LoginProccess = true;
    this.authService.login(this.user).subscribe(
      (res) => {
        console.log(res);
        this.LoginProccess = false;
        this.error = !res;
      },
      (err) => {
        console.log('error', err);
        this.LoginProccess = false;
      }
    );
  }
}
