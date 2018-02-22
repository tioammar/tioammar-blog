import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { BlogsService } from '../blogs.service';
import { error } from 'util';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogsService) { }

  private data: Observable<Blog[]>;
  private blogs: Blog[];
  private user: User;
  private errorMessage: string;
  private count: number;

  ngOnInit() {
    // the initial count of blogs we retrieve
    this.count = 10;
    // get the blog;
    this.getBlogs();
  }

  getBlogs(): void {
    this.data = this.blogService.getBlogs(this.count);
    this.data.subscribe(
      json => {
        this.blogs = json["blogs"];
        this.user = json["user"];
      }, // see notebook page 6 for documentation
      errorMessage => this.errorMessage = <any>errorMessage
    );
  }

  onUpdateChange(): void {
    // update blog count on  "show more" clicked and update blog on page
    this.count = this.count + 5;
    this.getBlogs();
  }
}
