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
  private count: number;

  ngOnInit() {
    this.count = 10;
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs(this.count).subscribe(
      resp => {
        this.blogs = resp.body.blog;
      }
    );
  }

  onUpdateChange(): void {
    this.count = this.count + 5;
    this.getBlogs();
  }
}
