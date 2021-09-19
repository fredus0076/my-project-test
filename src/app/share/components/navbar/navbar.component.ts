import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'My Porject'
  links = [
    {name: 'Home', url: ['/home']},
    {name: 'Other', url: ['/other']}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
