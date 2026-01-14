
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface MaintenanceTip {
  category: 'Daily' | 'Weekly' | 'Seasonal';
  tips: string[];
}
