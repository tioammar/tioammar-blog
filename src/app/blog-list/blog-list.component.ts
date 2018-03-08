import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { BlogsService } from '../blogs.service';
import { error } from 'util';
import { JsonResponse } from '../model/json-response';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogsService) { }

  private blogs: Blog[];
  // private errorMessage: string;
  private count: number;

  ngOnInit() {
    // the initial count of blogs we retrieve
    this.count = 10;
    // get the blog;
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs(this.count).subscribe(
      // using resp in case our app get full reponse from server
      resp => {
        this.blogs = resp.body.blog; // body is JsonReponse object lol
      }
    );
  }

  onUpdateChange(): void {
    // update blog count on  "show more" clicked and update blog on page
    this.count = this.count + 5;
    this.getBlogs();
  }
}
