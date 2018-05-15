import { Injectable } from '@angular/core';
import { GruposIf, ObraIf } from '../modelos/master';
import { Grupos, Obras, ObrasMusicales } from '../modelos/info_grupos';

@Injectable()
export class GruposService {

  private aGrupos: Array<GruposIf>;
  private aObras: Array<ObraIf>;
  private aObrasMus: Array<ObraIf>;

  constructor() {
    this.aGrupos = Grupos;
    this.aObras = Obras;
    this.aObrasMus = ObrasMusicales;
  }

  getGrupos() {
    return this.aGrupos;
  }

  getGrupo(id: number | string) {
    return this.aGrupos.find(grupo => grupo.id === +id);
  }

  getObra(nav: number | string, id: number | string) {
    if (id === '1') {
      return this.aObras.find(obra => obra.nav === +nav);
    }
    if (id === '2') {
      return this.aObrasMus.find(obra => obra.nav === +nav);
    } else {
      return this.aObras.find(obra => obra.nav === +nav);
    }
  }

}
