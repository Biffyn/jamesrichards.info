import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { checkBinding } from '@angular/core/src/view/util';
import { ContactMessage } from '../models/contactMessage.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  serverUrl = 'http://localhost:3000/';
  errorData: {};

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  public sendMessage(formdata: ContactMessage) {
    return this.http
      .post<ContactMessage>(
        this.serverUrl + 'api/contact',
        JSON.stringify(formdata),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
