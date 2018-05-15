import { GruposIf, ObraIf, AsientosIf, InfoObraIf, RepresentacionIf } from './master';


export const ObrasMusicales: Array<ObraIf> = [
  { nav: 1, title: 'Spamalot', description: 'nada', date: 'Abril 2018', img: '', type: 'musical' },
  { nav: 2, title: 'El Jorobado de Notre Damme', description: 'nada', date: 'Marzo 2017', img: '', type: 'musical' },
];

export const Obras: Array<ObraIf> = [
  { nav: 1, title: 'Tirant lo Blanch', description: 'nada', date: 'Abril 2018', img: 'ejemplopeque.JPG', type: 'AA' },
  { nav: 2, title: 'MacBeth', description: 'nada', date: 'Marzo 2017', img: 'ejemplopeque.JPG', type: 'AA' },
];

export const AsientosLeftInit: AsientosIf = {
  rows: [
    { col: 15, row: 1, state: 'L' }, { col: 13, row: 1, state: 'L' }, { col: 11, row: 1, state: 'L' }, { col: 9, row: 1, state: 'B' },
    { col: 7, row: 1, state: 'L' }, { col: 5, row: 1, state: 'L' }, { col: 3, row: 1, state: 'V' }, { col: 1, row: 1, state: 'V' },
    { col: 15, row: 2, state: 'L' }, { col: 13, row: 2, state: 'L' }, { col: 11, row: 2, state: 'L' }, { col: 9, row: 2, state: 'B' },
    { col: 7, row: 2, state: 'L' }, { col: 5, row: 2, state: 'L' }, { col: 3, row: 2, state: 'V' }, { col: 1, row: 2, state: 'V' },
    { col: 15, row: 3, state: 'L' }, { col: 13, row: 3, state: 'L' }, { col: 11, row: 3, state: 'L' }, { col: 9, row: 3, state: 'B' },
    { col: 7, row: 3, state: 'L' }, { col: 5, row: 3, state: 'L' }, { col: 3, row: 3, state: 'V' }, { col: 1, row: 3, state: 'V' },
    { col: 15, row: 4, state: 'L' }, { col: 13, row: 4, state: 'L' }, { col: 11, row: 4, state: 'L' }, { col: 9, row: 4, state: 'B' },
    { col: 7, row: 4, state: 'L' }, { col: 5, row: 4, state: 'L' }, { col: 3, row: 4, state: 'V' }, { col: 1, row: 4, state: 'V' },
    { col: 15, row: 5, state: 'L' }, { col: 13, row: 5, state: 'L' }, { col: 11, row: 5, state: 'L' }, { col: 9, row: 5, state: 'B' },
    { col: 7, row: 5, state: 'L' }, { col: 5, row: 5, state: 'L' }, { col: 3, row: 5, state: 'V' }, { col: 1, row: 5, state: 'V' },
    { col: 15, row: 6, state: 'L' }, { col: 13, row: 6, state: 'L' }, { col: 11, row: 6, state: 'L' }, { col: 9, row: 6, state: 'B' },
    { col: 7, row: 6, state: 'L' }, { col: 5, row: 6, state: 'L' }, { col: 3, row: 6, state: 'V' }, { col: 1, row: 6, state: 'V' },
    { col: 15, row: 7, state: 'L' }, { col: 13, row: 7, state: 'L' }, { col: 11, row: 7, state: 'L' }, { col: 9, row: 7, state: 'B' },
    { col: 7, row: 7, state: 'L' }, { col: 5, row: 7, state: 'L' }, { col: 3, row: 7, state: 'V' }, { col: 1, row: 7, state: 'V' },
    { col: 15, row: 8, state: 'L' }, { col: 13, row: 8, state: 'L' }, { col: 11, row: 8, state: 'L' }, { col: 9, row: 8, state: 'B' },
    { col: 7, row: 8, state: 'L' }, { col: 5, row: 8, state: 'L' }, { col: 3, row: 8, state: 'V' }, { col: 1, row: 8, state: 'V' },
    { col: 15, row: 9, state: 'L' }, { col: 13, row: 9, state: 'L' }, { col: 11, row: 9, state: 'L' }, { col: 9, row: 9, state: 'B' },
    { col: 7, row: 9, state: 'L' }, { col: 5, row: 9, state: 'L' }, { col: 3, row: 9, state: 'V' }, { col: 1, row: 9, state: 'V' },
    { col: 15, row: 10, state: 'L' }, { col: 13, row: 10, state: 'L' }, { col: 11, row: 10, state: 'L' }, { col: 9, row: 10, state: 'B' },
    { col: 7, row: 10, state: 'L' }, { col: 5, row: 10, state: 'L' }, { col: 3, row: 10, state: 'V' }, { col: 1, row: 10, state: 'V' },
    { col: 15, row: 11, state: 'L' }, { col: 13, row: 11, state: 'L' }, { col: 11, row: 11, state: 'L' }, { col: 9, row: 11, state: 'B' },
    { col: 7, row: 11, state: 'L' }, { col: 5, row: 11, state: 'L' }, { col: 3, row: 11, state: 'V' }, { col: 1, row: 11, state: 'V' },
    { col: 15, row: 12, state: 'L' }, { col: 13, row: 12, state: 'L' }, { col: 11, row: 12, state: 'L' }, { col: 9, row: 12, state: 'B' },
    { col: 7, row: 12, state: 'L' }, { col: 5, row: 12, state: 'L' }, { col: 3, row: 12, state: 'V' }, { col: 1, row: 12, state: 'V' }, ],
  number_rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};


export const AsientosRightInit: AsientosIf = {
  rows: [
    { col: 16, row: 1, state: 'L' }, { col: 14, row: 1, state: 'L' }, { col: 12, row: 1, state: 'L' }, { col: 10, row: 1, state: 'B' },
    { col: 8, row: 1, state: 'L' }, { col: 6, row: 1, state: 'L' }, { col: 4, row: 1, state: 'V' }, { col: 2, row: 1, state: 'V' },
    { col: 16, row: 2, state: 'L' }, { col: 14, row: 2, state: 'L' }, { col: 12, row: 2, state: 'L' }, { col: 10, row: 2, state: 'B' },
    { col: 8, row: 2, state: 'L' }, { col: 6, row: 2, state: 'L' }, { col: 4, row: 2, state: 'V' }, { col: 2, row: 2, state: 'V' },
    { col: 16, row: 3, state: 'L' }, { col: 14, row: 3, state: 'L' }, { col: 12, row: 3, state: 'L' }, { col: 10, row: 3, state: 'B' },
    { col: 8, row: 3, state: 'L' }, { col: 6, row: 3, state: 'L' }, { col: 4, row: 3, state: 'V' }, { col: 2, row: 3, state: 'V' },
    { col: 16, row: 4, state: 'L' }, { col: 14, row: 4, state: 'L' }, { col: 12, row: 4, state: 'L' }, { col: 10, row: 4, state: 'B' },
    { col: 8, row: 4, state: 'L' }, { col: 6, row: 4, state: 'L' }, { col: 4, row: 4, state: 'V' }, { col: 2, row: 4, state: 'V' },
    { col: 16, row: 5, state: 'L' }, { col: 14, row: 5, state: 'L' }, { col: 12, row: 5, state: 'L' }, { col: 10, row: 5, state: 'B' },
    { col: 8, row: 5, state: 'L' }, { col: 6, row: 5, state: 'L' }, { col: 4, row: 5, state: 'V' }, { col: 2, row: 5, state: 'V' },
    { col: 16, row: 6, state: 'L' }, { col: 14, row: 6, state: 'L' }, { col: 12, row: 6, state: 'L' }, { col: 10, row: 6, state: 'B' },
    { col: 8, row: 6, state: 'L' }, { col: 6, row: 6, state: 'L' }, { col: 4, row: 6, state: 'V' }, { col: 2, row: 6, state: 'V' },
    { col: 16, row: 7, state: 'L' }, { col: 14, row: 7, state: 'L' }, { col: 12, row: 7, state: 'L' }, { col: 10, row: 7, state: 'B' },
    { col: 8, row: 7, state: 'L' }, { col: 6, row: 7, state: 'L' }, { col: 4, row: 7, state: 'V' }, { col: 2, row: 7, state: 'V' },
    { col: 16, row: 8, state: 'L' }, { col: 14, row: 8, state: 'L' }, { col: 12, row: 8, state: 'L' }, { col: 10, row: 8, state: 'B' },
    { col: 8, row: 8, state: 'L' }, { col: 6, row: 8, state: 'L' }, { col: 4, row: 8, state: 'V' }, { col: 2, row: 8, state: 'V' },
    { col: 16, row: 9, state: 'L' }, { col: 14, row: 9, state: 'L' }, { col: 12, row: 9, state: 'L' }, { col: 10, row: 9, state: 'B' },
    { col: 8, row: 9, state: 'L' }, { col: 6, row: 9, state: 'L' }, { col: 4, row: 9, state: 'V' }, { col: 2, row: 9, state: 'V' },
    { col: 16, row: 10, state: 'L' }, { col: 14, row: 10, state: 'L' }, { col: 12, row: 10, state: 'L' }, { col: 10, row: 10, state: 'B' },
    { col: 8, row: 10, state: 'L' }, { col: 6, row: 10, state: 'L' }, { col: 4, row: 10, state: 'V' }, { col: 2, row: 10, state: 'V' },
    { col: 16, row: 11, state: 'L' }, { col: 14, row: 11, state: 'L' }, { col: 12, row: 11, state: 'L' }, { col: 10, row: 11, state: 'B' },
    { col: 8, row: 11, state: 'L' }, { col: 6, row: 11, state: 'L' }, { col: 4, row: 11, state: 'V' }, { col: 2, row: 11, state: 'V' },
    { col: 16, row: 12, state: 'L' }, { col: 14, row: 12, state: 'L' }, { col: 12, row: 12, state: 'L' }, { col: 10, row: 12, state: 'B' },
    { col: 8, row: 12, state: 'L' }, { col: 6, row: 12, state: 'L' }, { col: 4, row: 12, state: 'V' }, { col: 2, row: 12, state: 'V' }, ],
  number_rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};


export const Representacion1: RepresentacionIf = {
  asientos_left: AsientosLeftInit,
  asientos_right: AsientosRightInit,
  date: 'Sabado 20 Junio',
  hour: '20:00',
};
export const Representacion2: RepresentacionIf = {
  asientos_left: AsientosLeftInit,
  asientos_right: AsientosRightInit,
  date: 'Sabado 20 Junio',
  hour: '18:00',
};
export const Representacion3: RepresentacionIf = {
  asientos_left: AsientosLeftInit,
  asientos_right: AsientosRightInit,
  date: 'Domingo 21 Junio',
  hour: '20:00',
};

export const InfoObra: InfoObraIf = {
  obra: 'Tirant lo Blanc',
  representaciones: [Representacion1, Representacion2, Representacion3],
};

export const Grupos: Array<GruposIf> = [
  {
    id: 1, title: 'Antiguos Alumnos',
    // tslint:disable-next-line:max-line-length
    description: 'El grupo de antiguos alumnos, con una larga historia por detrás creada hace más de 30 años, cuenta con grandes actores con años de experiencia. Una propuesta que anima a antiguos alumnos a seguir conectados con esta actividad que partcipaban cuando eran pequeños.Estrenando obras de todo tipo de género desde un drama de Shakespeare hasta una comedia de Lope de Vega, pasando por diversos géneros creando obras con un resultado muy bueno.',
    history: Obras
  },
  {
    id: 2, title: 'Musicales',
    // tslint:disable-next-line:max-line-length
    description: 'El grupo de musicales creado hace 2 años, estrenó el pasado Febrero de 2016 su primera obra, "El Jorobado de Notredamme" con una acogida estupenda con más de 1800 espectadores en 6 representaciones.Actualmente trabajando en un nuevo musical y tratando de mejorar día a día.',
    history: ObrasMusicales
  },
  {
    id: 3, title: 'Alumnos',
    // tslint:disable-next-line:max-line-length
    description: 'El grupo de alumnos una propuesta arriesgada y cada vez más presente entre los alumnos del colegio,  realiza una obra de teatro anual trabajando en formato de compañía teatral consiguiendo que los alumnos se interesen por el mundo del espectáculo y aprendan diferentes destrezas ligadas al teatro.Con el teatro conseguimos estimular el aprendizaje de diversas destrezas y competencias relacionadas con el ámbito cognitivo, creativo y social/comunicativo, además de incentivar actitudes y valores indispensables, como el compañerismo, la cooperación, la participación activa, la iniciativa, el sentido de la responsabilidad, la perseverancia, el respeto por el trabajo de los demás, la crítica constructiva y la tolerancia.',
    history: Obras
  },
];






