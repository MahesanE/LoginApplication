import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/userdetails.model';

@Injectable({
  providedIn: 'root'
})
export class LoginAppService {
  private loggedIn = false;
  private apiUrl = "https://kind-intuition-production.up.railway.app/api";
  userDetails: UserDetails | null = null;

  constructor(private http: HttpClient) { }

  login(userId: string, password: string): Observable<UserDetails> {
    const loginInfo = { userId, password };
    return this.http.post<UserDetails>(`${this.apiUrl}/login`, loginInfo);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, null);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setUserDetails(userDetails: UserDetails): void {
    this.userDetails = userDetails;
    this.loggedIn = true;
  }

  clearUserDetails(): void {
    this.userDetails = null;
    this.loggedIn = false;
  }

  register(userDetails: UserDetails): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, userDetails);
  }
}