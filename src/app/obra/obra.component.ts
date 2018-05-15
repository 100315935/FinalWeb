import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GruposService } from '../servicios/grupos.service';
import { ObraIf } from '../modelos/master';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {

  oObra: ObraIf;
  compra: String;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: GruposService) { }

  ngOnInit() {
    this.compra = '/compra';
    const id = this.activatedRoute.snapshot.params['id'];
    const nav = this.activatedRoute.snapshot.params['nav'];
    if (id) {
      this.oObra = this.servicio.getObra(nav, id);
    } else {
      this.oObra = {nav: 0, title: '',  description: '', date: '', img: '', type: '' };
    }
  }

}
