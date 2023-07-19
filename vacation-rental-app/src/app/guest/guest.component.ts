import { Component, OnInit } from '@angular/core';
import { VacationRentalService } from '../vacation-rental.service';
import { Guest } from '../models';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  guests: Guest[] = [];
  newGuest: Guest = {
    id: 0,
    guestName: '',
    gender: '',
    dateOfBirth: new Date(),
    bio: ''
  };

  constructor(private vacationRentalService: VacationRentalService) { }

  ngOnInit(): void {
    this.getGuests();
  }

  getGuests(): void {
    this.vacationRentalService.getGuests().subscribe((guests) => {
      this.guests = guests;
    });
  }

  addGuest(): void {
    this.vacationRentalService.addGuest(this.newGuest).subscribe((guest) => {
      this.guests.push(guest);
      this.newGuest = {
        id: 0,
        guestName: '',
        gender: '',
        dateOfBirth: new Date(),
        bio: ''
      };
    });
  }

  editGuest(guest: Guest): void {
    // Implement editing guest functionality if needed
  }

  deleteGuest(guestId: number): void {
    this.vacationRentalService.deleteGuest(guestId).subscribe(() => {
      this.guests = this.guests.filter((guest) => guest.id !== guestId);
    });
  }
}
