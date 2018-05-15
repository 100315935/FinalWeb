import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraComponent } from './obra.component';
import { ObraRoutingModule } from './obra-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObraRoutingModule
  ],
  declarations: [ObraComponent],
  exports: [ObraComponent]
})
export class ObraModule { }
