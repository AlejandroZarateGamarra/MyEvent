import { Component } from '@angular/core';
import {EventsComponent} from "../events/events.component";
import {PostComponent} from "../../../components/post/post.component";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-catalogue',
  standalone: true,
    imports: [
        EventsComponent,
        PostComponent,
        MatButton,
        RouterLink
    ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent{ }


