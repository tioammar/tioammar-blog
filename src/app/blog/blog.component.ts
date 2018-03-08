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

  blog: Blog;

  ngOnInit() { }
}
