import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home/home.component";
import {CatalogueComponent} from "./views/catalogue/catalogue/catalogue.component";
import {AboutComponent} from "./views/about/about/about.component";
import {ContactComponent} from "./views/contact/contact/contact.component";

//Imports Alessandro
import { EventNotificationComponent } from './views/event-notification/event-notification.component';
import { EventPurchaseConfirmationComponent } from './views/event-purchase-confirmation/event-purchase-confirmation.component';

//import Piero
import {CreateEventComponent} from "./components/create-event/create-event.component";


export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'event_notification', component: EventNotificationComponent},
  {path: 'event_purchase_confirmation', component: EventPurchaseConfirmationComponent},
  {path: 'create_event', component: CreateEventComponent},

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
