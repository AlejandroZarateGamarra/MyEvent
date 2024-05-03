import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home/home.component";
import {CatalogueComponent} from "./views/catalogue/catalogue/catalogue.component";
import {AboutComponent} from "./views/about/about/about.component";
import {ContactComponent} from "./views/contact/contact/contact.component";


export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
