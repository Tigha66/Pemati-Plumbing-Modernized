
import React from 'react';
import { MaintenanceTip, Review } from './types';

export const COLORS = {
  primary: '#0056b3', // Professional Blue
  secondary: '#00a8e8', // Cyan/Light Blue
  accent: '#ff3131', // Emergency Red
  white: '#ffffff',
  gray: {
    light: '#f8fafc',
    medium: '#94a3b8',
    dark: '#1e293b'
  }
};

export const CONTACT_INFO = {
  phone: '(646) 806-1231',
  email: 'pematiservices@gmail.com',
  address: 'Serving NY and NJ'
};

export const MAINTENANCE_DATA: MaintenanceTip[] = [
  {
    category: 'Daily',
    tips: [
      'Clear clogs to prevent blockage',
      'Only flush toilet paper down the drain',
      'After using garbage disposal run cold water down the drain',
      'Don\'t use strong solutions such as Drain-O without consulting a plumber'
    ]
  },
  {
    category: 'Weekly',
    tips: [
      'Check under sinks for signs of moisture or leaks',
      'Clean faucet aerators to maintain water pressure',
      'Test shower and tub drains for speed of drainage'
    ]
  },
  {
    category: 'Seasonal',
    tips: [
      'Insulate exposed pipes before winter to prevent freezing',
      'Drain your water heater to remove sediment (Autumn)',
      'Check outdoor spigots for leaks in Spring'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Kelly B.',
    date: 'May 12, 2023',
    rating: 5,
    text: 'Jack was awesome - a real problem solver and so professional. Highly recommend!',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Josh L.',
    date: 'April 8, 2023',
    rating: 5,
    text: 'Very responsive. Came on short notice and flexible schedule. Even had to make two trips to get the right parts to fix a leaky shower.',
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: '3',
    name: 'Bill P.',
    date: 'March 22, 2023',
    rating: 5,
    text: 'Very good job, responsive and clean. Explained everything clearly.',
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];
