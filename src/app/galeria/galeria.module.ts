import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaRoutingModule } from './galeria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GaleriaRoutingModule
  ],
  declarations: [GaleriaComponent],
  exports: [GaleriaComponent]
})
export class GaleriaModule { }
