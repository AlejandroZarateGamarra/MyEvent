import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule ,FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  contrasena: string = "";
  mostrarContrasena: boolean = false; // Inicialmente, mostrar contraseña desactivado

  constructor(private router: Router, private http: HttpClient) {}

  // Método para verificar las credenciales del usuario
  verificarCredenciales() {
    this.http.get('http://localhost:3000/admins').subscribe((data: any) => {
      console.log(data);
      if (data) {
        const userExists = data.some((user: {
          email: string,
          password: string
        }) => user.email === this.email && user.password === this.contrasena);
        if (userExists) {
          // Redirigir al usuario al dashboard o a la página principal
          alert('Bienvenido organizador');
          this.router.navigate(['/home']);
        } else {
          this.http.get('http://localhost:3000/usuarios').subscribe((data: any) => {
            console.log(data);
            if (data) {
              const userExists = data.some((user: {
                email: string,
                password: string
              }) => user.email === this.email && user.password === this.contrasena);
              if (userExists) {
                // Redirigir al usuario al dashboard o a la página principal
                alert('Bienvenido usuario');
                this.router.navigate(['/home']);
              } else {
                alert('Correo electrónico o contraseña incorrectos o no registrados');
              }
            } else {
              console.log('Data or data.users is undefined');
            }
          });
        }
      } else {
        console.log('Data or data.users is undefined');
      }
    });





  }

  // Método para redirigir a la página de recuperación de contraseña
  redirigirARecuperacionContrasena() {
    this.router.navigate(['/forgotpass']); // Cambia '/recuperar-contrasena' por la ruta deseada
  }

  redirigirARegistro() {
    this.router.navigate(['/register']);
  }

}
