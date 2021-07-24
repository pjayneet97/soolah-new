import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  role = "customer" // use this role to send it with object
  constructor(public http: HttpClient,public router:Router,public common:CommonService) { }


  /* Registration & Login  */

  register(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/register', data)
  }


  login(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/login', data)
  }


  /* OTP  */

  verifyOTP(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/verifyOTP', data)
  }


  resendOTP(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/resendOTP', data)
  }


  /* Password */


  resetPassword(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/resetPassword', data)
  }


  forgotPassword(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/forgotPassword', data)
  }


  changePassword(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/changePassword', data)
  }

  /* Update Profile */


  updateUserDetails(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/updateUserDetails', data)
  }


  updateUserProfilePic(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/updateProfilePic', data)
  }


  getProfile() {
    return this.http.get(environment.baseUrl + '/api/v1/account/profile')
  }

  /* This function is user for set cleaner data into localstorage */
  setUserData(data: any) {
    localStorage.setItem("userData", JSON.stringify(data))
  }

  setEncryptedToken(data:any) {
    localStorage.setItem("encryptedToken",data)
  }

  getEncryptedToken() {
    return localStorage.getItem("encryptedToken")
  }

  getUserData() {
    return JSON.parse(localStorage.getItem("userData"))
  }

  removeLocalStorageData() {
    localStorage.removeItem("userData")
    localStorage.removeItem("encryptedToken")
  }

  logout() {
    this.removeLocalStorageData()
    this.common.showToast("Logout Successful!")
    this.router.navigateByUrl("/get-started")
  }

  getAvailableCleaners(data) {
    return this.http.get(environment.baseUrl + '/api/v1/account/getAvailableCleaners?'+ this.getQueryString(data))
  }


  createBooking(data) {
    return this.http.post(environment.baseUrl + '/api/v1/account/createNewBooking', data)
  }


  getQueryString(obj){
    var str = [];
   for(var p in obj){
       if (obj.hasOwnProperty(p)) {
           str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
       }
   }
   return str.join("&");
  }





}