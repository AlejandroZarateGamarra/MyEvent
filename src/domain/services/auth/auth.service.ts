import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;
  userRoleChanged = new BehaviorSubject<'user' | 'admin' | null>(null);

  login(user: User) {
    // ... código de inicio de sesión ...

    // Establecer el usuario actual después de iniciar sesión
    this.currentUser = user;
    this.userRoleChanged.next(this.currentUser.role);
  }

  isAdmin(): boolean {
    return this.currentUser ? this.currentUser.role === 'admin' : true;
  }

  makeAdmin() {
    if (this.currentUser) {
      this.currentUser.role = 'admin';
      this.userRoleChanged.next('admin');
    }
  }

  makeUser() {
    if (this.currentUser) {
      this.currentUser.role = 'user';
      this.userRoleChanged.next('user');
    }
  }
}
