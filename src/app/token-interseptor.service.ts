import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req,next){
    if(localStorage.getItem("encryptedToken")){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `${localStorage.getItem("encryptedToken")}`
        }
      })
      return next.handle(tokenizedReq)
    }else{
      let request = req.clone({})
      return next.handle(request)
    }
  }
}