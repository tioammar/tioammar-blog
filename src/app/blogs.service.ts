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
      // client side error or network error
      console.error("error:", error.error.message);
    } else {
      // back-end error.
      // it could be unsuccessful response code or body error
      console.error("backend return code:", error.status);
    }
    return new ErrorObservable('something bad happened');
  }

  // return observable JsonResponse to parse into object
  // note: angular is automatically parse json to anonimous objec. All you can do is to create an object as representation!
  // in this case, it's JsonResponse. angular awesome!
  getBlogs(count: number): Observable<HttpResponse<JsonResponse>> {
    // this.reqUrl = this.blogUrl + "/" + count;
    console.log(this.blogUrl); // show req url for typechecking

    // observe response means we want to get full http response. so get the json data by using resp.body
    return this.http.get<JsonResponse>(this.blogUrl, {observe: 'response'})
      .pipe(
        retry(3), // retry three times
        catchError(this.handlingError)
      );
  }
}
