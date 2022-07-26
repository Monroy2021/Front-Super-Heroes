import { Component, OnInit } from '@angular/core';
import { CartasTablero } from '../../CartasTablero';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  CARTATABLERO: CartasTablero[] = [
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/0BF.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/0E0.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/1AE.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/1DF.jpg' },
    { id: 'fhfghfghytuj', url: '../../../assets/img/heroes/1F4.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
