import { Component, OnInit } from '@angular/core';
import { VacationRentalService } from '../vacation-rental.service';
import { Booking, Property, Guest } from '../models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];
  properties: Property[] = [];
  guests: Guest[] = [];
  newBooking: Booking = {
    id: 0,
    propertyId: 0,
    guestId: 0,
    checkInDate: new Date(),
    checkOutDate: new Date()
  };

  constructor(private vacationRentalService: VacationRentalService) { }

  ngOnInit(): void {
    this.getProperties();
    this.getGuests();
    this.getBookings();
  }

  getProperties(): void {
    this.vacationRentalService.getProperties().subscribe((properties) => {
      this.properties = properties;
    });
  }

  getGuests(): void {
    this.vacationRentalService.getGuests().subscribe((guests) => {
      this.guests = guests;
    });
  }

  getBookings(): void {
    this.vacationRentalService.getBookings().subscribe((bookings) => {
      this.bookings = bookings;
    });
  }

  addBooking(): void {
    this.vacationRentalService.addBooking(this.newBooking).subscribe((booking) => {
      this.bookings.push(booking);
      this.newBooking = {
        id: 0,
        propertyId: 0,
        guestId: 0,
        checkInDate: new Date(),
        checkOutDate: new Date()
      };
    });
  }

  editBooking(booking: Booking): void {
    // Implement editing booking functionality if needed
  }

  deleteBooking(bookingId: number): void {
    this.vacationRentalService.deleteBooking(bookingId).subscribe(() => {
      this.bookings = this.bookings.filter((booking) => booking.id !== bookingId);
    });
  }
}
