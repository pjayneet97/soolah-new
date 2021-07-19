import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService {
  role: string = "customer"

  constructor(public service: CustomerService, public router: Router) { }

  canActivate(): boolean {
    if (this.service.getUserData()?.user?.role == this.role && this.service.getEncryptedToken()) {
      return true
    }
    else {
      this.router.navigateByUrl("/" + this.role + "/auth")
      return false
    }
  }
}
