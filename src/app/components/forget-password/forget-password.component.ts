import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  //~~~~~~~~~~~~~~~~~~~~~~~~~STEP TO SHOW FORMS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  step: number = 1;

  //~~~~~~~~~~~~~~~~~~~~~~~~~INJECTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);

  //~~~~~~~~~~~~~~~~~~~~~~~~~FORM1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  //~~~~~~~~~~~~~~~~~~~~~~~~~FORM2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6}$/),
    ]),
  });
  //~~~~~~~~~~~~~~~~~~~~~~~~~FORM3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  //~~~~~~~~~~~~~~API LOGI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  verifyEmailSub(): void {
    let emailValue = this.verifyEmail.get('email')?.value;
    this.resetPassword.get('email')?.patchValue(emailValue);
    this._AuthService.verifyEmail(this.verifyEmail.value).subscribe({
      next: (res) => {
        if (res.statusMsg == 'success') {
          this.step = 2;
        }
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  verifyCodeSub(): void {
    this._AuthService.verifyCode(this.verifyCode.value).subscribe({
      next: (res) => {
        if (res.statusMsg != 'fail') {
          this.step = 3;
        }
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  resetPassSub(): void {
    this._AuthService.setNewPassword(this.resetPassword.value).subscribe({
      next: (res) => {
        localStorage.setItem('userToken', res.token);
        this._AuthService.saveUserData();
        this._Router.navigate(['/home']);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //~~~~~~~~~~~~~~ ENDAPI LOGI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}
