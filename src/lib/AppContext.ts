import { Schedule, Team } from '@/data/types';
import { createContext } from 'react';

type AppContext = {
  year: number;
  teams: Team[];
  seasonSchedule: Schedule[];
  seasonStartDate?: Date;
  seasonEndDate?: Date;
};

export default createContext<AppContext>({
  year: 2024,
  teams: [],
  seasonSchedule: [],
});
