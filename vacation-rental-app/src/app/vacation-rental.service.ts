import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host, Property, Guest, Booking } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacationRentalService {
  private apiUrl = 'http://your-backend-api-url/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Hosts CRUD operations
  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(`${this.apiUrl}/hosts`);
  }

  addHost(host: Host): Observable<Host> {
    return this.http.post<Host>(`${this.apiUrl}/hosts`, host);
  }

  updateHost(host: Host): Observable<Host> {
    return this.http.put<Host>(`${this.apiUrl}/hosts/${host.id}`, host);
  }

  deleteHost(hostId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/hosts/${hostId}`);
  }

  // Properties CRUD operations
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}/properties`);
  }

  addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiUrl}/properties`, property);
  }

  updateProperty(property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiUrl}/properties/${property.id}`, property);
  }

  deleteProperty(propertyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/properties/${propertyId}`);
  }

   // Guests CRUD operations
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiUrl}/guests`);
  }

  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(`${this.apiUrl}/guests`, guest);
  }

  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/guests/${guest.id}`, guest);
  }

  deleteGuest(guestId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/guests/${guestId}`);
  }

   // Bookings CRUD operations
   getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/bookings`);
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }

  updateBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/bookings/${booking.id}`, booking);
  }

  deleteBooking(bookingId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/bookings/${bookingId}`);
  }
}
