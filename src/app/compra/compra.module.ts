import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra.component';
import { FormsModule } from '@angular/forms';
import { CompraRoutingModule } from './compra-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CompraRoutingModule,
    FormsModule,
  ],
  declarations: [CompraComponent],
  exports: [CompraComponent]
})
export class CompraModule { }
