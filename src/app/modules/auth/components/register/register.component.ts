import { RegisterErrorResponce } from './../../../interfaces/register-response.interface';
import { RegisterBody } from './../../../interfaces/register-body.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { bounceInUpOnEnterAnimation } from 'lib';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [bounceInUpOnEnterAnimation({ anchor: 'enter1' })],
})
export class RegisterComponent implements OnInit {
  hide = true;
  checked = false;
  animation = 'rubberBand';
  animationState = false;

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
    confirmPassword: new FormControl('', []),
  });

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Only letters';
  }
  getErrorMessageLastName() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Only letters';
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
  getErrorMessagePassConfirm() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }
    return 'The passwords do not match';
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmited() {
    if (this.password.value != this.confirmPassword.value) {
      this.confirmPassword.setErrors({ incorrect: true });
      return;
    }

    const body: RegisterBody = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.registerUser(body).subscribe({
      next: (res) => {
        this.router.navigate(['/list']);
      },
      error: (err: RegisterErrorResponce) => {
        console.log(err.error);
      },
    });
  }

  formSubmit(e: Event) {
    e.preventDefault();
  }
  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }
  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
}
