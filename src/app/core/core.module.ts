import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { GruposService } from '../servicios/grupos.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  providers: [
    GruposService
  ]
})
export class CoreModule { }