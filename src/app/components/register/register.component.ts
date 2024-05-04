import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  accountType = false;
  nombre = "";
  correo = "";
  contrasena: string =  "";
  Repcontrasena: string = "";
  mostrarNombre: boolean = false;
  mostrarEmail: boolean = false; // Inicialmente, mostrar email desactivado
  mostrarContrasena: boolean = false; // Inicialmente, mostrar contraseña desactivado
  savepassword: boolean = false; // en un principio la contraseña no se guarda


  constructor(private http: HttpClient, private routes: Router) {} // Inyecta HttpClient aquí

  redirigirAInicioSesion() {
    const newUser = {
      user: this.nombre,
      password: this.contrasena,
      email: this.correo,
    };

    const url = this.accountType ? 'http://localhost:3001/admins' : 'http://localhost:3001/usuarios';

    this.http.post(url, newUser).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.routes.navigate(['/login']);
  }
}
