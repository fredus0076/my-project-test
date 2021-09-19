import { Component, Input, OnInit } from '@angular/core';
import { Structure } from '../../interfaces/structure.interface';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {
  @Input() structure: Structure[];
  constructor() { }

  ngOnInit(): void {
  }

}
