import { Component, OnInit} from '@angular/core';
import { GruposService } from '../../servicios/grupos.service';
import { GruposIf } from '../../modelos/master';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  aGrupos: Array<GruposIf>;

  constructor(private grupos: GruposService) {
   }

  ngOnInit() {
    this.aGrupos = this.grupos.getGrupos();
  }

}
