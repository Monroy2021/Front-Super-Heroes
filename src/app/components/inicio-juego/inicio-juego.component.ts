import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-inicio-juego',
  templateUrl: './inicio-juego.component.html',
  styleUrls: ['./inicio-juego.component.css'],
})
export class InicioJuegoComponent implements OnInit {
  usuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService
      .getUsuarios()
      .subscribe((usuario) => (this.usuarios = usuario));
  }

  email = localStorage.getItem('email');
}
