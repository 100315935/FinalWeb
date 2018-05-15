import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncarPipe } from './truncar.pipe';
import { FechaPipe } from './fecha.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TruncarPipe,
    FechaPipe
  ],
  exports: [
    TruncarPipe,
    FechaPipe
  ]
})
export class PipesModule { }
