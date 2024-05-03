import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import { EventService } from '../../services/event.service';
import { Event } from '../../model/event.model';
import { AuthService } from "../../../domain/services/auth/auth.service";
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { MatCardTitle, MatCardSubtitle} from "@angular/material/card";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  eventos: Event[] = [];
  isAdmin: boolean = false;

  constructor(private http: HttpClient, private eventService: EventService, public authService: AuthService) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.authService.userRoleChanged.subscribe(role => {
      this.isAdmin = role === 'admin';
    });
  }
  fetchPosts(){
    this.http.get('assets/data/events.json')
      .subscribe((data: any) => {
        console.log(data);
        this.eventos = data.eventos;
      });
  }

  onDelete(id: number): void {
    this.eventService.deleteEvento(id).subscribe(() => {
      this.eventos = this.eventos.filter(data => data.id !== id);
    });
  }

  trackByPosts(index: number, evento: any): number {
    return evento.id;
  }


}
