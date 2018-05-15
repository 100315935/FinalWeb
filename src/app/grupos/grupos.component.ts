import { Component, OnInit } from '@angular/core';
import { GruposIf, ObraIf } from '../modelos/master';
import { Grupos, Obras } from '../modelos/info_grupos';
import { GruposService } from '../servicios/grupos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  oGrupo: GruposIf;
  aObras: Array<ObraIf>;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: GruposService) {
    activatedRoute.params.subscribe(val => {
      const id = this.activatedRoute.snapshot.params['id'];
      if (id) {
        this.oGrupo = this.servicio.getGrupo(id);
        this.aObras = this.oGrupo.history;
      } else {
        this.oGrupo = { id: 0, title: '', description: '', history: Obras };
        this.aObras = this.oGrupo.history;
      }
    });
  }


  ngOnInit() {
  }


}
