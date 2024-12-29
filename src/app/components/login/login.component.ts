import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  //~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~//
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  //~~~~~~~~~~~~~~PROPERTY~~~~~~~~~~~~~~//
  errorMsg: string = '';
  SuccessMsg: boolean = false;
  isLoading: boolean = false;
  //~~~~~~~~~~~~~create formsGroup~~~~~~~~~~~~~~//
  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });
  //~~~~~~~~~~~~~END FORMGROUP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~FormGroup(Old Syntax)~~~~~~~~~~~~~~~~//
  // resgisterForm:FormGroup = new FormGroup({
  //   name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  //   rePassword:new FormControl(null),
  //   phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  // },this.confirmPassword)
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~SUBMITTTTT~~~~~~~~~~~~~~~~~~~~~~~~~
  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if (res.message == 'success') {
            this.SuccessMsg = true;
            //~~~~~~~~~~~~~~~~~~NAVIGATE TO LOGIN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            setTimeout(() => {
              //~~~~~~~~~~~~~~~~~~~TOKEN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              localStorage.setItem('userToken', res.token);
              this._AuthService.saveUserData();

              this._Router.navigate(['/home']);
            }, 2000);
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message;
          console.log(err);
          this.isLoading = false;
        },
      });
    }
  }
}
//~~~~~~~~~~~~~~~~~~~~~~~END SUBMITT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
