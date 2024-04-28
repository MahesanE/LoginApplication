import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from '../models/userdetails.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetailsSubject = new BehaviorSubject<UserDetails | null>(null);

  get userDetails() {
    return this.userDetailsSubject.asObservable();
  }

  setUserDetails(userDetails: UserDetails) {
    this.userDetailsSubject.next(userDetails);
  }
}
