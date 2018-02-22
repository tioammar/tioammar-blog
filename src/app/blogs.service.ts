import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Blog } from './model/blog';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogsService {

  constructor(private http: Http) { }

  private blogUrl = "http://localhost:4200/assets/data/data.json";
  private responses: any[];
  private reqUrl: string;

  private jsonData(res: Response){
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  getBlogs(count: number): Observable<Blog[]> {
    // this.reqUrl = this.blogUrl + "/" + count;
    console.log(this.blogUrl); // show req url for typechecking

    return this.http.get(this.blogUrl)
      .map(this.jsonData)
      .catch(this.handleError);
  }
}
