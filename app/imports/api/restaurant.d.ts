declare global {
  interface OpeningHours {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    [key: string]: string;
  }
  interface Restaurant {
    _id?: string;
    name: string;
    address: string;
    tags: string[];
    creationDate: Date;
    openingHours: OpeningHours;
  }
}

export {};
