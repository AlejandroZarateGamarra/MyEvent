import { Component } from '@angular/core';
import {EventsComponent} from "../events/events.component";
import {PostComponent} from "../../../components/post/post.component";


@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    EventsComponent,
    PostComponent
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent{ }


