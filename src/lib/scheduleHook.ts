import { Schedule } from '@/data/types';
import { useState } from 'react';
const useSchedule = (defaultSchedule: Schedule[]) => {
  const [seasonSchedule, setSeasonSchedule] =
    useState<Schedule[]>(defaultSchedule);

  return [seasonSchedule];
};

export default useSchedule;
