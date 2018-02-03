import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { User } from '../model/user';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
