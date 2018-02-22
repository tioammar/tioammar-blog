import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {

  constructor() { }

  // this is where we generate list of blog archive (monthly view).
  // model:
  // firebase - send blog data - get all month - sorting blog per month 

  ngOnInit() {
  }
}
