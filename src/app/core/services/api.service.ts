import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { environment } from '../../../environments/environment';
import { catchError } from "rxjs/operators";
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  private handelErrors(error: any) {
    return  throwError(error);
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.handelErrors));
  }
}
