import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const registrationUrl=this.apiUrl+"/auth/signup"
    return this.http.post<any>(registrationUrl, userData);
  }

  // Method to log in a user
  login(userLogin:any): Observable<any> {
    const loginUrl=this.apiUrl+"/auth/login"
    const body =userLogin;  
    return this.http.post<any>(loginUrl, body);      
  }
  
 

}
