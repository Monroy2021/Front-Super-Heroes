import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { Usuario } from 'src/app/interface/usuario';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private usuarioService: UsuarioService
  ) {
    this.registrarUsuario = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const nombre = this.registrarUsuario.value.nombre;
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassowrd = this.registrarUsuario.value.repetirPassword;

    console.log(this.registrarUsuario);
    if (password !== repetirPassowrd) {
      this.toastr.error(
        'Las contraseñas ingresadas deben ser las mismas',
        'Error'
      );
      return;
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.registrarUsuarioDb(nombre, email);
        this.verificarCorreo();
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }

  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info(
          'Le enviamos un correo electronico para su verificacion',
          'Verificar correo'
        );
        this.router.navigate(['/login']);
      });
  }

  registrarUsuarioDb(nombre: String, email: String) {
    this.usuarioService
      .saveUsuario({ nombre, email } as Usuario)
      .subscribe((usuario) => console.log(usuario));
  }
}
