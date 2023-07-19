import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './host/host.component';
import { PropertyComponent } from './property/property.component';
import { GuestComponent } from './guest/guest.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: 'hosts', component: HostComponent },
  { path: 'properties', component: PropertyComponent },
  { path: 'guests', component: GuestComponent },
  { path: 'bookings', component: BookingComponent },
  { path: '', redirectTo: '/hosts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
