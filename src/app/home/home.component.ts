import { Component, OnInit } from '@angular/core';
import { Structure } from './interfaces/structure.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  structure: Structure[]= [
    { line: 1, name: 'Mark', lastName: 'Otto', mail: '	@mdo'},
    { line: 2, name: 'Jacob', lastName: 'Thornton', mail: '@fat'},
    { line: 3, name: 'Larry', lastName: 'the Bird	', mail: '@twitter'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
