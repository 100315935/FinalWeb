import { Component, OnInit } from '@angular/core';
import { AsientosIf, InfoObraIf, RepresentacionIf, AsientoIf } from '../modelos/master';
import { AsientosLeftInit, AsientosRightInit, InfoObra } from '../modelos/info_grupos';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  // Proceso de compra
  proceso: number;

  // Representacion elegida
  rep_elegida: RepresentacionIf;

  // Asiento elegido
  as_elegido: Array<AsientoIf>;
  infoObra: InfoObraIf;

  constructor() { }

  ngOnInit() {
    this.proceso = 1;
    this.infoObra = InfoObra;
    this.as_elegido = [];

    console.log(this.rep_elegida);
  }

  elegir(one) {
      one.state = 'C';
      this.as_elegido.push(one);
  }

  liberar(one) {
    let index = this.as_elegido.indexOf(one);
    this.as_elegido.splice(index, 1);
    one.state = 'L';
  }

  rowsOfColumn(filas, colunm) {
    let thatRow: Array<AsientosIf> = [];
    filas.forEach(element => {
      if (element.row === colunm) {
        thatRow.push(element);
      }
    });
    return thatRow;
  }

  volver() {
    this.proceso--;
  }
  avanzar() {
    if (this.rep_elegida) {
      this.proceso = 2;
    }
    if (this.as_elegido.length !== 0) {
      console.log(this.as_elegido);
      this.proceso = 3;
    }
  }
}
