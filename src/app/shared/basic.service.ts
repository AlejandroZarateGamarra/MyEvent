import { Injectable } from '@angular/core';
import {notificationEnvironment} from "../environments/notification-environment";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, retry } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BasicService {
  base_url=notificationEnvironment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else{
      console.error('Backend returned code ${error.status}'+' '+
        'body was: ${error.error}');}
    return throwError('Something bad happened; please try again later.');
  }
  get(): Observable<any> {
    return this.httpClient.get<any>(this.base_url)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  getBoleta(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.base_url}/boleta/${id}`)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  createEvent(event: any): Observable<any> {
    const url = `${this.base_url}/eventos`;
    return this.httpClient.post(url, event, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
