export interface GruposIf {
  id: number;
  title: string;
  description: string;
  history: Array<ObraIf>;
}

export interface ObraIf {
  nav: number;
  title: string;
  date: string;
  description: string;
  img: string;
  type: string;
}

export interface AsientosIf {
  rows: Array<AsientoIf>;
  number_rows: Array<number>;
}

export interface AsientoIf {
  state: string;
  row: number;
  col: number;
}

export interface RepresentacionIf {
  asientos_left: AsientosIf;
  asientos_right: AsientosIf;
  date: string;
  hour: string;
}

export interface InfoObraIf {
  obra: string;
  representaciones: Array<RepresentacionIf>;
}
