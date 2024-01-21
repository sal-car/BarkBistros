declare global {
  interface Restaurant {
    name: string;
    address: string;
    tags: string[];
    creation_date: Date;
    opening_hours: OpeningHours;
  }
}

interface OpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export {};
