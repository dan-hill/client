import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError} from "rxjs";
import {API_TOKEN_URL} from "./constants/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  authenticate(email: string, password: string) {
    return this.httpClient.post(API_TOKEN_URL, {
      "email": email,
      "password": password
    }).pipe(catchError(this.handleError));
  }
}
