import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './base/navbar/navbar.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  exports:[
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
