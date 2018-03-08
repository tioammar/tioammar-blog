import { Injectable } from '@angular/core';
// now using HttpClient since Http from @angular/http is deprecated
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Blog } from './model/blog';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './model/user';
import { JsonResponse } from './model/json-response';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BlogsService {

  constructor(private http: HttpClient) { }

  private blogUrl = "http://localhost:4200/assets/data/data.json";
  private reqUrl: string;

  private handlingError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("error:", error.error.message);
    } else {
      console.error("backend return code:", error.status);
    }
    return new ErrorObservable('something bad happened');
  }

  getBlogs(count: number): Observable<HttpResponse<JsonResponse>> {
    console.log(this.blogUrl);
    return this.http.get<JsonResponse>(this.blogUrl, {observe: 'response'})
      .pipe(
        retry(3),
        catchError(this.handlingError)
      );
  }
}
