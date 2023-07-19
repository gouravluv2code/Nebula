import { Component, OnInit } from '@angular/core';
import { VacationRentalService } from '../vacation-rental.service';
import { Host, Property } from '../models';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {
  hosts: Host[] = [];
  properties: Property[] = [];

  constructor(private vacationRentalService: VacationRentalService) { }

  ngOnInit(): void {
    this.getHosts();
    this.getProperties();
  }

  getHosts(): void {
    this.vacationRentalService.getHosts().subscribe((hosts) => {
      this.hosts = hosts;
    });
  }

  getProperties(): void {
    this.vacationRentalService.getProperties().subscribe((properties) => {
      this.properties = properties;
    });
  }

  // Implement methods for adding, updating, and deleting hosts and properties
}
