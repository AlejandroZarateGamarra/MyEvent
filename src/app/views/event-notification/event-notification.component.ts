import { Component, OnInit } from '@angular/core';
import { Boleta } from "../../model/notification.model";
import { NgForOf, NgIf } from "@angular/common";
import { BasicService } from "../../shared/basic.service";
import { notificationEnvironment } from "../../environments/notification-environment";

@Component({
  selector: 'event-notification',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './event-notification.component.html',
  styleUrl: './event-notification.component.scss'
})
export class EventNotificationComponent implements OnInit {
  boleta?: Boleta;
  baseUrl = notificationEnvironment.baseUrl;
  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
    const id = 'eeecc445'; // Reemplaza esto con el ID de la boleta que deseas obtener
    this.basicService.getBoleta(id).subscribe((data: Boleta) => {
      this.boleta = data;
    });
  }
  getTotal() {
    let total = 0;
    this.boleta?.entradas.forEach(entrada => {
      total += entrada.precio;
    });
    return total;
  }
}
