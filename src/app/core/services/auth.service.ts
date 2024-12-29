import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 private readonly _HttpClient = inject(HttpClient);
 private readonly _Router = inject(Router)

//~~~~~~~~~~~~~~~SHARED PROPERRTY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
userData:any= null;
//~~~~~~~~~~~~~~~~REGISTER API~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 setRegisterForm(data:object):Observable<any>
 {
  return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/signup` , data)
 }
//~~~~~~~~~~~~~~~~~~END REGISTER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~START LOGIN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setLoginForm(data:object):Observable<any>
 {
  return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/signin` , data)
 }

 //~~~~~~~~~~~~~~~~~~END LOGIN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~USERDATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
saveUserData():void{
if (localStorage.getItem('userToken')!== null) {
  this.userData = jwtDecode(localStorage.getItem('userToken')!)
}

}
//~~~~~~~~~~~~~~~~~~~SIGNOUT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
signOut():void{
  localStorage.removeItem('userToken');
  this.userData = null;
  this._Router.navigate(['/login'])
}

//~~~~~~~~~~~~~~~FORGET PASS(VERFIY EMAIL)~~~~~~~~~~~~~~~~~~~~~~~~~~

verifyEmail(data:object):Observable<any>{
 return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/forgotPasswords` , data)
}
//~~~~~~~~~~~~~~~FORGET PASS(VERFIY CODE)~~~~~~~~~~~~~~~~~~~~~~~~~~

verifyCode(data:object):Observable<any>{
 return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/verifyResetCode` , data)
}
//~~~~~~~~~~~~~~~FORGET PASS(SET NEW PASS)~~~~~~~~~~~~~~~~~~~~~~~~~~
setNewPassword(data:object):Observable<any>{
 return this._HttpClient.put(`${environment.BaseUrl}/api/v1/auth/resetPassword` , data)
}

}
