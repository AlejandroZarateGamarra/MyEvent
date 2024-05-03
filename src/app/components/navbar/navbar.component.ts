import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/*import { TokenService } from 'src/app/services/token.service';*/

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements  OnInit{
  isMenuCollapsed = true;
  loggedIn = false;

  searchControl = new FormControl();

  ngOnInit(){
    this.loggedIn=false;
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {

      })
  }

  login(): void {
    this.loggedIn = true;
  }

  toggleSidenav(): void {
    // Logic to toggle the side nav
  }
}
