declare global {
  interface Restaurant {
    _id?: string;
    name: string;
    address: string;
    tags: string[];
    creation_date: Date;
    opening_hours: OpeningHours;
  }

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
}

export {};
