import { LoginBody } from './../../../interfaces/login-body.interface';
import { RegisterErrorResponce } from './../../../interfaces/register-response.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { bounceInUpOnEnterAnimation } from 'lib';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [bounceInUpOnEnterAnimation({ anchor: 'enter1' })],
})
export class LoginComponent implements OnInit {
  hide = true;
  checked = false;
  animation = 'rubberBand';
  animationState = false;

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
  });

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('minlength')) {
      return 'The password must be longer than 6 characters';
    }
    return 'The password must be less than 16 characters';
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  formSubmit(e: Event) {
    e.preventDefault();
  }

  loginSubmited() {
    const body: LoginBody = {
      email: this.email.value,
      password: this.password.value,
    };
    this.authService.loginUser(body).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/list');
      },
      error: (err: RegisterErrorResponce) => {
        console.log(err.error);
      },
    });
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }
}
