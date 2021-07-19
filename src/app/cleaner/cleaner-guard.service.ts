import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CleanerService } from './cleaner.service';

@Injectable({
  providedIn: 'root'
})
export class CleanerGuardService implements CanActivate {
  role: string = "cleaner"
  constructor(public service: CleanerService, public router: Router) { }

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
