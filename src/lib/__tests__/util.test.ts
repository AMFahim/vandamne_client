import { Schedule, TeamID } from '@/data/types';
import { getPrevAndNextMatchDays } from '@/lib/utils';

describe('Schedule with no games', () => {
  it('Bare table', () => {
    expect('').toEqual('');
  });
});

const testData: Schedule = {
  matchDay: 1,
  time: '2024-05-04T13:00',
  homeTeamId: TeamID.BLUE,
  awayTeamId: TeamID.RED,
  stage: 'season',
  tag: 'exhibition',
};

const scheduleParam: Schedule[] = [
  {
    ...testData,
    matchDay: 1,
    time: '2024-05-04T13:00',
  },
  {
    ...testData,
    matchDay: 2,
    time: '2024-05-11T13:00',
  },
  {
    ...testData,
    matchDay: 3,
    time: '2024-05-25T13:00',
  },
  {
    ...testData,
    matchDay: 4,
    time: '2024-06-15T13:00',
  },
  {
    ...testData,
    matchDay: 5,
    time: '2024-06-22T13:00',
  },
];

const matchDayParams = [
  {
    curDay: '2024/05/01',
    schedule: scheduleParam,
    expected: { prev: -1, next: 1 },
  },
  {
    curDay: '2024/05/04',
    schedule: scheduleParam,
    expected: { prev: -1, next: 1 },
  },
  {
    curDay: '2024/05/05',
    schedule: scheduleParam,
    expected: { prev: 1, next: 2 },
  },
  {
    curDay: '2024/05/12',
    schedule: scheduleParam,
    expected: { prev: 2, next: 3 },
  },
  {
    curDay: '2024/05/19',
    schedule: scheduleParam,
    expected: { prev: 2, next: 3 },
  },
  {
    curDay: '2024/05/26',
    schedule: scheduleParam,
    expected: { prev: 3, next: 4 },
  },
  {
    curDay: '2024/06/02',
    schedule: scheduleParam,
    expected: { prev: 3, next: 4 },
  },
  {
    curDay: '2024/06/09',
    schedule: scheduleParam,
    expected: { prev: 3, next: 4 },
  },
  {
    curDay: '2024/06/16',
    schedule: scheduleParam,
    expected: { prev: 4, next: 5 },
  },
  {
    curDay: '2024/06/22',
    schedule: scheduleParam,
    expected: { prev: 4, next: 5 },
  },
  {
    curDay: '2024/06/23',
    schedule: scheduleParam,
    expected: { prev: 5, next: -1 },
  },
  {
    curDay: '2024/07/23',
    schedule: scheduleParam,
    expected: { prev: 5, next: -1 },
  },
];

describe('Prev and Next match days', () => {
  test.each(matchDayParams)(
    '$description %s',
    ({ curDay, schedule, expected }) => {
      expect(getPrevAndNextMatchDays(new Date(curDay), schedule)).toStrictEqual(
        expected,
      );
    },
  );
});
