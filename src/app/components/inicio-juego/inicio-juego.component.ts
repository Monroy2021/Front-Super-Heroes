import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-inicio-juego',
  templateUrl: './inicio-juego.component.html',
  styleUrls: ['./inicio-juego.component.css'],
})
export class InicioJuegoComponent implements OnInit {
  formJugador: FormGroup;
  usuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.formJugador = this.fb.group({
      identificador: ['', [Validators.required]],
      alias: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService
      .getUsuarios()
      .subscribe((usuario) => (this.usuarios = usuario));
  }

  email = localStorage.getItem('email');

  crearJugador() {
    const identificador = this.formJugador.value.identificador;
    const alias = this.formJugador.value.alias;
    console.log(identificador);
    console.log(alias);
  }
}
