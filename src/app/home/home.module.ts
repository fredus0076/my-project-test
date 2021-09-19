import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from '../share/share.module';
import { HomeTableComponent } from './components/home-table/home-table.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
