import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidebarComponent,DeshboardComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, SidebarComponent,DeshboardComponent],
})
export class LayoutModule {}
