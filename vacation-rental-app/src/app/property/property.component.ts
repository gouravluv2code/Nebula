import { Component, OnInit } from '@angular/core';
import { VacationRentalService } from '../vacation-rental.service';
import { Host, Property } from '../models';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  hosts: Host[] = [];
  properties: Property[] = [];
  newProperty: Property = {
    id: 0,
    hostId: 0,
    propertyName: '',
    // Add other property fields as needed
  };

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

  addProperty(): void {
    this.vacationRentalService.addProperty(this.newProperty).subscribe((property) => {
      this.properties.push(property);
      this.newProperty = {
        id: 0,
        hostId: 0,
        propertyName: '',
        // Reset other property fields as needed
      };
    });
  }

  editProperty(property: Property): void {
    // Implement editing property functionality if needed
  }

  deleteProperty(propertyId: number): void {
    this.vacationRentalService.deleteProperty(propertyId).subscribe(() => {
      this.properties = this.properties.filter((property) => property.id !== propertyId);
    });
  }
}
