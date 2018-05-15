import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactoRoutingModule
  ],
  declarations: [ContactoComponent],
  exports: [ContactoComponent]
})
export class ContactoModule { }
