import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { User } from '../model/user';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blog = new Blog();
  user = new User();

  ngOnInit() {
    this.user.username = "Tioammar";
    this.blog.title = "Hello World!";
    this.blog.content = "Lorem Ipsum Dolor Sit Amet";
    this.blog.author = this.user.username;
  }
}
