export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  category?: string;
  badge?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  admin1: string;
  admin2: string;
  address: string;
  operationalHours: string;
  holidayNote: string;
}
