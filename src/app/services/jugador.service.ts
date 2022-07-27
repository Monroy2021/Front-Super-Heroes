import { Injectable } from '@angular/core';
import { catchError, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})

export class JugadorService {

  private jugadorUrl = "http://localhost:8080/api/heroes/jugador/";

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient
  ) { }


  crearJugador(jugador: Jugador): Observable<Jugador> {

    return this.http.post<Jugador>(this.jugadorUrl + "/save", jugador, this.httpOptions);

  }

  listarJugador(id: string): Observable<Jugador> {

    const url = `${this.jugadorUrl}/listar/${id}`;
    return this.http.get<Jugador>(url);

  }


}
