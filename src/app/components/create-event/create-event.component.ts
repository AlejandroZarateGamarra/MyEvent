import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormControl} from "@angular/forms";
import { isFormControl, ReactiveFormsModule} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import {BasicService} from "../../shared/basic.service";
import {Event} from "../../model/create-event.model";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterLink,

  ]
})
export class CreateEventComponent {
  name= new FormControl ("");
  date= new FormControl ("");
  hours= new FormControl ("");
  period= new FormControl ("");
  duration= new FormControl ("");
  direccion= new FormControl ("");
  category= new FormControl ("");
  errorMessage: string | null = null;
  goToNextStep() {
    if (this.name.invalid || this.date.invalid ||this.hours.invalid ||this.period.invalid ||this.duration.invalid || this.direccion.invalid || this.category.invalid) {
      this._snackBar.open('Por favor complete todos los campos antes de continuar.', 'Cerrar', {
        duration: 3000,
      });
    } else {
      this.createEvent();
    }
  }
  constructor(private _snackBar: MatSnackBar, private basicService: BasicService) {}

  createEvent() {
    const newEvent = new Event(
      this.name.value ?? '',
      this.date.value ?? '',
      this.hours.value ?? '',
      this.period.value ?? '',
      this.duration.value ?? '',
      this.direccion.value ?? '',
      this.category.value ?? ''
    );

    this.basicService.createEvent(newEvent).subscribe(
      response => {
        this._snackBar.open('Evento creado con éxito.', 'Cerrar', {
          duration: 3000,
        });
      },
      error => {
        this._snackBar.open('Hubo un error al crear el evento.', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }
}
