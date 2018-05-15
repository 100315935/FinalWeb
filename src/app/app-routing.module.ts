import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'grupos/:id', loadChildren: './grupos/grupos.module#GruposModule' },
  { path: 'grupos/:id/obras/:nav', loadChildren: './obra/obra.module#ObraModule' },
  { path: 'obra', loadChildren: './obra/obra.module#ObraModule'},
  { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoModule'},
  { path: 'compra', loadChildren: './compra/compra.module#CompraModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
