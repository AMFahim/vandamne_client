import { EXHIBIT_GROUP_NAME } from '@/lib/const';
import { Schedule, TeamID } from './types';

const schedule2023: Schedule[] = [
  {
    matchDay: 1,
    time: '2023-05-20T15:30',
    homeTeamId: TeamID.BLUE,
    awayTeamId: TeamID.RED,
    matchResult: {
      score: { home: 2, away: 1 },
    },
    group: EXHIBIT_GROUP_NAME,
    stage: 'season',
    tag: 'over-40',
  },
  {
    matchDay: 1,
    time: '2023-05-20T17:30',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.MARLBORO,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 0 },
      goalScorers: {
        home: [
          { count: 2, name: 'Boris' },
          { count: 1, name: 'Dante' },
        ],
        away: [],
      },
    },
  },
  {
    matchDay: 2,
    time: '2023-06-03T13:30',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.DELAWARE,
    group: 'C',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 0 },
      goalScorers: {
        home: [
          { shirtNumber: 13, count: 1 },
          { shirtNumber: 3, count: 1 },
        ],
        away: [],
      },
      yellowCards: {
        home: [],
        away: [{ count: 1 }, { count: 1 }, { count: 1 }, { count: 1 }],
      },
    },
  },
  {
    matchDay: 2,
    time: '2023-06-03T15:30',
    homeTeamId: TeamID.MARLBORO,
    awayTeamId: TeamID.VFC,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 1 },
    },
  },
  {
    matchDay: 2,
    time: '2023-06-03T17:30',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.BALISOA,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 1, away: 5 },
      goalScorers: {
        home: [{ shirtNumber: 8, count: 1 }],
        away: [
          { shirtNumber: 13, count: 1, ownGoal: true },
          { shirtNumber: 23, count: 1 },
          { shirtNumber: 12, count: 1 },
          { shirtNumber: 11, count: 2 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 3,
    time: '2023-06-10T13:30',
    homeTeamId: TeamID.BALISOA,
    awayTeamId: TeamID.LANDOVER,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 0 },
      goalScorers: {
        home: [
          { name: 'Elvis', count: 1 },
          { name: 'Tessi', count: 1 },
        ],
        away: [],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [{ count: 1 }, { count: 1 }, { count: 1 }],
      },
    },
  },
  {
    matchDay: 3,
    time: '2023-06-10T15:30',
    homeTeamId: TeamID.DELAWARE,
    awayTeamId: TeamID.SOCIAL,
    group: 'C',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 2 },
      goalScorers: {
        home: [
          { name: 'Udoka', count: 1 },
          { shirtNumber: 17, count: 1 },
        ],
        away: [
          { name: 'Tamukong', count: 1 },
          { name: 'Chagall', count: 1 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }],
        away: [],
      },
      redCards: {
        home: [{ count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 3,
    time: '2023-06-10T17:30',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.VFC,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 1 },
      goalScorers: {
        home: [
          { name: 'Serge', count: 2 },
          { name: 'Ako', count: 1 },
        ],
        away: [{ name: 'Ivo', count: 1 }],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }, { count: 1 }],
        away: [{ count: 1 }, { count: 1 }],
      },
      redCards: {
        home: [],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 4,
    time: '2023-06-17T13:30',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.MARLBORO,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 0 },
      goalScorers: {
        home: [
          { name: 'Ako', count: 1 },
          { name: 'William', count: 1 },
        ],
        away: [],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 4,
    time: '2023-06-17T15:30',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.LANDOVER,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 1, away: 0 },
      goalScorers: {
        home: [{ name: 'Henry', count: 1 }],
        away: [],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 4,
    time: '2023-06-17T17:30',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.SOCIAL,
    group: 'C',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 1 },
      goalScorers: {
        home: [],
        away: [{ name: 'Pascal', count: 1 }],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }],
        away: [{ count: 1 }, { count: 1 }],
      },
    },
  },
  {
    matchDay: 5,
    time: '2023-06-24T13:30',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.BALISOA,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 1 },
      goalScorers: {
        home: [
          { name: 'Smith', count: 1 },
          { name: 'Njomo', count: 1 },
        ],
        away: [{ name: 'Kenneth', count: 1 }],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 5,
    time: '2023-06-24T15:30',
    homeTeamId: TeamID.BLUE,
    awayTeamId: TeamID.RED,
    group: EXHIBIT_GROUP_NAME,
    stage: 'season',
    tag: 'over-40',
    matchResult: {
      score: { home: 2, away: 1 },
    },
  },
  {
    matchDay: 5,
    time: '2023-06-24T17:30',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.DELAWARE,
    group: 'C',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 1, away: 1 },
      goalScorers: {
        home: [{ name: 'Judoka', count: 1 }],
        away: [{ name: 'Mambo', count: 1 }],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 6,
    time: '2023-07-08T13:30',
    homeTeamId: TeamID.MARLBORO,
    awayTeamId: TeamID.VFC,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 5 },
      goalScorers: {
        home: [],
        away: [
          { name: 'Andy', count: 1 },
          { name: 'Ivo', count: 2 },
          { name: 'Mara', count: 2 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 6,
    time: '2023-07-08T15:30',
    homeTeamId: TeamID.BALISOA,
    awayTeamId: TeamID.LANDOVER,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 1, away: 6 },
      goalScorers: {
        home: [{ name: 'Chemo', count: 1 }],
        away: [
          { name: 'Mbami', count: 2 },
          { name: 'Roland', count: 1 },
          { name: 'Clinton', count: 2 },
          { name: 'Amiba', count: 1 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }, { count: 1 }],
        away: [{ count: 1 }, { count: 1 }],
      },
      redCards: {
        home: [],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 6,
    time: '2023-07-08T17:30',
    homeTeamId: TeamID.DELAWARE,
    awayTeamId: TeamID.SOCIAL,
    group: 'C',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 5 },
      goalScorers: {
        home: [{ name: 'Chemo', count: 1 }],
        away: [
          { name: 'Felix', count: 3 },
          { name: 'Pascal', count: 1 },
          { name: 'Ngwatezeh', count: 1 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }, { count: 1 }],
        away: [],
      },
      redCards: {
        home: [{ count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 7,
    time: '2023-07-15T13:30',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.SOCIAL,
    group: 'C',
    matchResult: {
      score: { home: 0, away: 3 },
      // goalScorers: {
      //   home: [{ name: 'Collins', count: 1, ownGoal:true }],
      //   away: [
      //     { name: 'Mucho', count: 2 },
      //     { name: 'Adrian', count: 1 },
      //   ],
      // },
      yellowCards: {
        home: [{ count: 1 }],
        away: [{ count: 1 }],
      },
    },
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 7,
    time: '2023-07-15T15:30',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.VFC,
    group: 'A',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 1 },
      goalScorers: {
        home: [],
        away: [{ name: 'Andy', count: 1 }],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [{ count: 1 }, { count: 1 }],
      },
    },
  },
  {
    matchDay: 7,
    time: '2023-07-15T17:30',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.LANDOVER,
    group: 'B',
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 0 },
      goalScorers: {
        home: [],
        away: [],
      },
      yellowCards: {
        home: [],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 8,
    time: '2023-07-22T16:00',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.LANHAM,
    stage: 'semi-final',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 3 },
      goalScorers: {
        home: [
          { name: 'Bell', count: 2 },
          { name: 'Ako', count: 1 },
        ],
        away: [
          { name: 'Smith', count: 2 },
          { name: 'Toh', count: 1 },
        ],
      },
      yellowCards: {
        home: [{ count: 1 }, { count: 1 }, { count: 1 }],
        away: [{ count: 1 }, { count: 1 }, { count: 1 }],
      },
      penalties: { home: 4, away: 3 },
    },
  },
  {
    matchDay: 8,
    time: '2023-07-22T18:00',
    homeTeamId: TeamID.SOCIAL,
    awayTeamId: TeamID.VFC,
    stage: 'semi-final',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 0 },
      goalScorers: {
        home: [
          { name: 'Pascal', count: 1 },
          { name: 'Collins', count: 1 },
          { name: 'Ndoumbe', count: 1 },
        ],
        away: [],
      },
      yellowCards: {
        home: [{ count: 1 }],
        away: [{ count: 1 }],
      },
    },
  },
  {
    matchDay: 9,
    time: '2023-07-29T14:00',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.VFC,
    stage: 'third-place',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 0 },
    },
  },
  {
    matchDay: 9,
    time: '2023-07-29T16:00',
    homeTeamId: TeamID.BLUE,
    awayTeamId: TeamID.RED,
    stage: 'final',
    tag: 'over-40',
    matchResult: { score: { home: 6, away: 1 } },
  },
  {
    matchDay: 9,
    time: '2023-07-29T17:30',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.SOCIAL,
    stage: 'final',
    matchResult: { score: { home: 2, away: 1 } },
    tag: 'dmvvl',
  },
];

const schedule2024: Schedule[] = [
  {
    matchDay: 1,
    time: '2024-05-04T13:00',
    homeTeamId: TeamID.BAFUT,
    awayTeamId: TeamID.MUSTUS,
    stage: 'season',
    tag: 'exhibition',
    matchResult: {
      score: { home: 2, away: 0 },
    },
  },
  {
    matchDay: 1,
    time: '2024-05-04T15:00',
    homeTeamId: TeamID.BLUE,
    awayTeamId: TeamID.RED,
    stage: 'season',
    tag: 'over-40',
    matchResult: {
      score: { home: 1, away: 1 },
    },
  },
  {
    matchDay: 1,
    time: '2024-05-04T17:00',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.SPARTAN,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 1, away: 3 },
      goalScorers: {
        home: [{ shirtNumber: 9, count: 1, name: 'Nelson Ngo Kuma' }],
        away: [{ shirtNumber: 9, name: 'Epizitone Nsanbeh', count: 3 }],
      },
      yellowCards: {
        home: [
          { shirtNumber: 27, count: 1 },
          { shirtNumber: 16, count: 1 },
          { name: 'Team Medic', count: 1 },
        ],
        away: [{ shirtNumber: 3, count: 1 }],
      },
      redCards: {
        home: [{ shirtNumber: 25, count: 1 }],
        away: [],
      },
    },
  },
  {
    matchDay: 2,
    time: '2024-05-11T13:00',
    homeTeamId: TeamID.BALTIMORE,
    awayTeamId: TeamID.MARLBORO,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 4, away: 1 },
      goalScorers: {
        home: [{ name: 'Anthony Che', shirtNumber: 20, count: 4 }],
        away: [{ name: 'Wafo Tagne', shirtNumber: 7, count: 1 }],
      },
      yellowCards: {
        home: [{ shirtNumber: 15, count: 1 }],
        away: [{ shirtNumber: 1, count: 1 }],
      },
    },
  },
  {
    matchDay: 2,
    time: '2024-05-11T15:00',
    homeTeamId: TeamID.BALISOA,
    awayTeamId: TeamID.DELAWARE,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 4, away: 3 },
      goalScorers: {
        home: [
          { name: 'Tessi', shirtNumber: 11, count: 2 },
          { name: 'Martin Ngum', shirtNumber: 8, count: 2 },
        ],
        away: [
          { name: 'Yusuf', shirtNumber: 10, count: 1 },
          { name: 'Rilwan', shirtNumber: 5, count: 1 },
          { name: 'Balisoa', count: 1, ownGoal: true },
        ],
      },
      yellowCards: {
        home: [{ shirtNumber: 16, count: 1 }],
        away: [
          { shirtNumber: 12, count: 1 },
          { shirtNumber: 24, count: 1 },
          { shirtNumber: 23, count: 1 },
        ],
      },
    },
  },
  {
    matchDay: 2,
    time: '2024-05-11T17:00',
    homeTeamId: TeamID.VFC,
    awayTeamId: TeamID.SOCIAL,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 5, away: 3 },
      goalScorers: {
        home: [
          { name: 'Lamin', shirtNumber: 9, count: 2 },
          { name: 'Bash', shirtNumber: 7, count: 2 },
          { name: 'Adebayor', shirtNumber: 10, count: 1 },
        ],
        away: [
          { name: 'Che Anye', shirtNumber: 25, count: 2 },
          { name: 'Tassota', shirtNumber: 7, count: 1 },
        ],
      },
      yellowCards: {
        home: [
          { shirtNumber: 3, count: 1 },
          { shirtNumber: 22, count: 1 },
        ],
        away: [
          { shirtNumber: 7, count: 1 },
          { shirtNumber: 11, count: 1 },
        ],
      },
    },
  },
  {
    matchDay: 3,
    time: '2024-05-18T13:00',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.SOCIAL,
    matchResult: {
      goalScorers: {
        home: [
          { shirtNumber: 16, name: 'Michael Collins', count: 3 },
          { shirtNumber: 2, name: 'Mara Diouf', count: 1 },
        ],
        away: [
          { shirtNumber: 20, name: 'Solomon Zolowa', count: 2 },
          { shirtNumber: 15, name: 'Godwin Impriam', count: 1 },
          { shirtNumber: 7, name: 'Robert Chagua', count: 1 },
          { shirtNumber: 5, name: 'Denis Dobgima', count: 1, ownGoal: true },
        ],
      },
      score: {
        home: 4,
        away: 5,
      },
      yellowCards: {
        home: [{ shirtNumber: 18, count: 1 }],
        away: [],
      },
      redCards: {
        home: [{ shirtNumber: 9, count: 1 }],
        away: [
          { shirtNumber: 3, count: 1 },
          { shirtNumber: 21, count: 1 },
        ],
      },
    },
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 3,
    time: '2024-05-18T15:00',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.LANDOVER,
    matchResult: {
      goalScorers: {
        home: [{ shirtNumber: 9, name: 'Ivo Ndi', count: 1 }],
        away: [{ shirtNumber: 21, name: 'Jude Nkimbeng', count: 1 }],
      },
      score: {
        home: 1,
        away: 1,
      },
      yellowCards: {
        home: [
          { shirtNumber: 18, count: 1 },
          { shirtNumber: 12, count: 1 },
          { shirtNumber: 4, count: 1 },
          { shirtNumber: 7, count: 1 },
        ],
        away: [{ shirtNumber: 11, count: 1 }],
      },
    },
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 3,
    time: '2024-05-18T17:00',
    homeTeamId: TeamID.NOVA,
    awayTeamId: TeamID.MARLBORO,
    matchResult: {
      goalScorers: {
        home: [
          { shirtNumber: 22, name: 'Boris Tchoua', count: 4 },
          { shirtNumber: 20, name: 'Simon Ajua', count: 1 },
        ],
        away: [],
      },
      score: {
        home: 5,
        away: 0,
      },
      yellowCards: {
        home: [{ shirtNumber: 31, count: 1 }],
        away: [{ shirtNumber: 12, count: 1 }],
      },
    },
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 4,
    time: '2024-06-08T15:00',
    homeTeamId: TeamID.DELAWARE,
    awayTeamId: TeamID.SPARTAN,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: {
        home: 1,
        away: 5,
      },
      goalScorers: {
        home: [{ name: 'Brian', shirtNumber: 17, count: 1 }],
        away: [
          { name: 'Galidore', shirtNumber: 2, count: 2 },
          { name: 'Tariku', shirtNumber: 21, count: 1 },
          { name: 'Raoul', shirtNumber: 6, count: 1 },
          { name: 'Alemkia', shirtNumber: 8, count: 1 },
        ],
      },
      yellowCards: {
        home: [
          { shirtNumber: 14, count: 1 },
          { shirtNumber: 24, count: 1 },
        ],
        away: [],
      },
    },
  },
  {
    matchDay: 4,
    time: '2024-06-08T17:00',
    homeTeamId: TeamID.RED,
    awayTeamId: TeamID.BLUE,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 5,
    time: '2024-06-15T13:00',
    homeTeamId: TeamID.LANDOVER,
    awayTeamId: TeamID.NOVA,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 5 },
      goalScorers: {
        home: [{ count: 3, shirtNumber: 27, name: 'Goddy Fiaboh' }],
        away: [
          { count: 1, shirtNumber: 20, name: 'Simon Ajua' },
          { count: 1, shirtNumber: 18, name: 'Y. Chiepodeu' },
          { count: 1, name: 'Albert Bieleu' },
          { count: 2, name: 'Boris Tchoua' },
        ],
      },
      yellowCards: {
        home: [
          { count: 1, shirtNumber: 19 },
          { count: 1, shirtNumber: 8 },
          { count: 1, shirtNumber: 29 },
          { count: 1, shirtNumber: 12 },
        ],
        away: [
          { count: 1, shirtNumber: 11 },
          { count: 1, shirtNumber: 1 },
          { count: 1, shirtNumber: 20 },
          { count: 1, shirtNumber: 31 },
        ],
      },
      redCards: {
        home: [{ count: 1, shirtNumber: 17 }],
        away: [{ count: 1, shirtNumber: 27 }],
      },
    },
  },
  {
    matchDay: 5,
    time: '2024-06-15T15:00',
    homeTeamId: TeamID.ELITE,
    awayTeamId: TeamID.BALTIMORE,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 5, away: 1 },
      goalScorers: {
        home: [
          { count: 1, shirtNumber: 15, name: 'Clifton Swinson ' },
          { count: 1, shirtNumber: 13, name: 'Victor Esseme ' },
          { count: 1, shirtNumber: 12, name: 'Elvis Mengndze' },
          { count: 2, shirtNumber: 14, name: 'Michael Collins ' },
        ],
        away: [{ count: 1, shirtNumber: 8, name: 'Anthony Ndoh' }],
      },
      yellowCards: {
        home: [{ count: 1, shirtNumber: 3 }],
        away: [{ count: 1, shirtNumber: 19 }],
      },
    },
  },
  {
    matchDay: 5,
    time: '2024-06-15T17:00',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.DELAWARE,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 3, away: 2 },
      goalScorers: {
        home: [
          { count: 2, shirtNumber: 14, name: 'Ndanji Romaric ' },
          { count: 1, shirtNumber: 15, name: 'Dominic Tetuh ' },
        ],
        away: [
          { count: 1, shirtNumber: 4, name: 'Joseph Benson' },
          { count: 1, shirtNumber: 10, name: 'Cyril Ojeanelo' },
        ],
      },
      yellowCards: {
        home: [{ count: 1, shirtNumber: 14 }],
        away: [
          { count: 1, shirtNumber: 15 },
          { count: 1, shirtNumber: 4 },
          { count: 1, shirtNumber: 14 },
          { count: 1, shirtNumber: 10 },
        ],
      },
    },
  },
  {
    matchDay: 6,
    time: '2024-06-22T13:00',
    homeTeamId: TeamID.BALISOA,
    awayTeamId: TeamID.VFC,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 3 },
    },
  },
  {
    matchDay: 6,
    time: '2024-06-22T15:00',
    homeTeamId: TeamID.SOCIAL,
    awayTeamId: TeamID.BALTIMORE,
    stage: 'season',
    tag: 'over-40',
    matchResult: {
      score: { home: 5, away: 1 },
      goalScorers: {
        home: [
          { count: 2, name: 'Momen Felix' },
          { count: 1, name: 'Ernest Ngipe' },
          { count: 1, name: 'Aubreville Tassota' },
          { count: 1, name: 'Rigober Chagua' },
        ],
        away: [{ count: 1, name: 'Cyrille Kenah' }],
      },
    },
  },
  {
    matchDay: 6,
    time: '2024-06-22T17:00',
    homeTeamId: TeamID.MARLBORO,
    awayTeamId: TeamID.SPARTAN,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 2 },
      goalScorers: {
        home: [],
        away: [
          { count: 1, name: 'Galidore Ngapeth' },
          { count: 1, name: 'Collins Ako' },
        ],
      },
      yellowCards: {
        home: [],
        away: [
          { count: 1, shirtNumber: 5 },
          { count: 1, shirtNumber: 8 },
        ],
      },
    },
  },
  {
    matchDay: 7,
    time: '2024-06-29T13:30',
    homeTeamId: TeamID.BIROCOL,
    awayTeamId: TeamID.SHESANS,
    stage: 'season',
    tag: 'exhibition',
    matchResult: {
      score: { home: 0, away: 3 },
    },
  },
  {
    matchDay: 7,
    time: '2024-06-29T15:00',
    homeTeamId: TeamID.LANHAM,
    awayTeamId: TeamID.BALISOA,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 2, away: 5 },
      goalScorers: {
        home: [
          { count: 1, name: 'Dominic Tetuh' },
          { count: 1, name: 'Ivo Ndi' },
        ],
        away: [
          { count: 3, name: 'Cyril Tessi' },
          { count: 1, name: 'Derick Dayeboa' },
          { count: 1, name: 'Elvis Sunjo' },
        ],
      },
      yellowCards: {
        home: [
          { count: 1, name: 'Coach' },
          { count: 1, shirtNumber: 8 },
        ],
        away: [
          { count: 1, name: 'Coach' },
          { count: 1, shirtNumber: 10 },
          { count: 1, shirtNumber: 15 },
        ],
      },
    },
  },
  {
    matchDay: 7,
    time: '2024-06-29T17:00',
    homeTeamId: TeamID.VFC,
    awayTeamId: TeamID.LANDOVER,
    stage: 'season',
    tag: 'dmvvl',
    matchResult: {
      score: { home: 0, away: 1 },
      goalScorers: {
        home: [],
        away: [{ count: 1, shirtNumber: 23 }],
      },
      yellowCards: {
        home: [
          { count: 1, shirtNumber: 11 },
          { count: 1, shirtNumber: 16 },
        ],
        away: [{ count: 1, shirtNumber: 21 }],
      },
      redCards: {
        home: [],
        away: [{ count: 1, name: 'Supporter' }],
      },
    },
  },
  {
    matchDay: 8,
    time: '2024-07-06T13:00',
    homeTeamId: TeamID.DELAWARE,
    awayTeamId: TeamID.VFC,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 8,
    time: '2024-07-06T15:00',
    homeTeamId: TeamID.SOCIAL,
    awayTeamId: TeamID.NOVA,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 8,
    time: '2024-07-06T17:00',
    homeTeamId: TeamID.LANDOVER,
    awayTeamId: TeamID.BALISOA,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 9,
    time: '2024-07-13T13:00',
    homeTeamId: TeamID.SPARTAN,
    awayTeamId: TeamID.BALTIMORE,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 9,
    time: '2024-07-13T15:00',
    homeTeamId: TeamID.MARLBORO,
    awayTeamId: TeamID.ELITE,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 9,
    time: '2024-07-13T17:00',
    homeTeamId: TeamID.NOVA,
    awayTeamId: TeamID.LANHAM,
    stage: 'season',
    tag: 'dmvvl',
  },
  {
    matchDay: 10,
    time: '2024-07-20T13:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'season',
    tag: 'exhibition',
  },
  {
    matchDay: 10,
    time: '2024-07-20T15:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'quarter-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 10,
    time: '2024-07-20T17:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'quarter-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 11,
    time: '2024-07-27T13:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'season',
    tag: 'exhibition',
  },
  {
    matchDay: 11,
    time: '2024-07-27T15:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'quarter-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 11,
    time: '2024-07-27T17:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'quarter-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 12,
    time: '2024-08-03T15:00',
    homeTeamId: TeamID.BLUE,
    awayTeamId: TeamID.RED,
    stage: 'semi-final',
    tag: 'over-40',
  },
  {
    matchDay: 12,
    time: '2024-08-03T15:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'semi-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 12,
    time: '2024-08-03T17:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'semi-final',
    tag: 'dmvvl',
  },
  {
    matchDay: 13,
    time: '2024-08-10T15:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'third-place',
    tag: 'dmvvl',
  },
  {
    matchDay: 13,
    time: '2024-08-10T15:00',
    homeTeamId: TeamID.RED,
    awayTeamId: TeamID.BLUE,
    stage: 'final',
    tag: 'over-40',
  },
  {
    matchDay: 13,
    time: '2024-08-10T17:00',
    homeTeamId: TeamID.DEFAULT,
    awayTeamId: TeamID.DEFAULT,
    stage: 'final',
    tag: 'dmvvl',
  },
];
const SCHEDULES = {
  2024: schedule2024,
  2023: schedule2023,
};

const getScheduleByYear = (year: number): Schedule[] => {
  if (year === 2023 || year === 2024) {
    return SCHEDULES[year];
  }

  return [];
};

export { getScheduleByYear };
