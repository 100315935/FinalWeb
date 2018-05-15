import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposComponent } from './grupos.component';
import { GruposRoutingModule } from './grupos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GruposRoutingModule
  ],
  declarations: [GruposComponent],
  exports: [GruposComponent]
})
export class GruposModule { }
