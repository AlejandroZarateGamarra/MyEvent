import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from "../model/event.model";

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventosUrl = 'http://localhost:3000/events';  // URL to web api

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventosUrl)
  }

  createEvento(evento: Event): Observable<Event> {
    return this.http.post<Event>(this.eventosUrl, evento)
  }

  updateEvento(evento: Event): Observable<any> {
    return this.http.put(`${this.eventosUrl}/${evento.id}`, evento)
  }

  deleteEvento(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.eventosUrl}/${id}`)
  }
}
