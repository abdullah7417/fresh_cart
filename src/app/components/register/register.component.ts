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
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  //~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~//
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  //~~~~~~~~~~~~~~PROPERTY~~~~~~~~~~~~~~//
  errorMsg: string = '';
  SuccessMsg: boolean = false;
  isLoading: boolean = false;
  registerSub!: Subscription;
  //~~~~~~~~~~~~~create formsGroup~~~~~~~~~~~~~~//
  resgisterForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: [null],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: this.confirmPassword },
  );
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

  //~~~~~~~~~~~~~~CONFIRM PASSWORD~~~~~~~~~~~~~~//
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value == g.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~END CONFIRMATION~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~SUBMITTTTT~~~~~~~~~~~~~~~~~~~~~~~~~
  registerSubmit(): void {
    if (this.resgisterForm.valid) {
      this.isLoading = true;
      this.registerSub = this._AuthService
        .setRegisterForm(this.resgisterForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = false;
            if (res.message == 'success') {
              this.SuccessMsg = true;
              //~~~~~~~~~~~~~~~~~~NAVIGATE TO LOGIN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              setTimeout(() => {
                this._Router.navigate(['/login']);
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

  ngOnDestroy(): void {
    this.registerSub?.unsubscribe();
  }
}
//~~~~~~~~~~~~~~~~~~~~~~~END SUBMITT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
