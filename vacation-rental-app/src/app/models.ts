export interface Host {
    id: number;
    name: string;
    status: boolean;
    location: string;
    propertyType: string;
    about: string;
    hostingSince: Date;
  }
  
  export interface Property {
    id: number;
    hostId: number;
    propertyName: string;
    // Add other property fields as needed
  }
  
  export interface Guest {
    id: number;
    guestName: string;
    gender: string;
    dateOfBirth: Date;
    bio: string;
  }
  
  export interface Booking {
    id: number;
    propertyId: number;
    guestId: number;
    checkInDate: Date;
    checkOutDate: Date;
    // Add other booking fields as needed
  }
  