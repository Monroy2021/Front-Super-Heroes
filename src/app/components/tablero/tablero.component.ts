import { Component, OnInit } from '@angular/core';
import { CartasTablero } from '../../CartasTablero';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  CARTATABLERO: CartasTablero[] = [
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/carta-oculta.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/carta-oculta.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/carta-oculta.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/carta-oculta.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/carta-oculta.jpg' },
  ];
  // cartaTablero: CartasTablero = {
  //   id: 'fhfghfghytuj',
  //   url: '../../../assets/img/heroes/0BF.jpg',
  // };

  constructor() {}

  ngOnInit(): void {}
}
