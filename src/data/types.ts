export enum TeamID {
  DEFAULT = 0,
  BLUE,
  RED,
  SPARTAN,
  MARLBORO,
  DELAWARE,
  LANHAM,
  ELITE,
  BALISOA,
  VFC,
  LANDOVER,
  SOCIAL,
  NOVA,
  BALTIMORE,
  BAFUT,
  MUSTUS,
  SHESANS,
  BIROCOL,
}

export type Team = {
  id: TeamID;
  name: string;
  shortName: string;
  abbr: string;
  logoId: string;
};

export type TabOption = 'home' | 'table' | 'fixtures' | 'referee' | 'admin';

export type NormalizedObject<T> = {
  byId: Record<string, T>;
  allIds: string[];
};

export type TableStats = {
  position: number;
  teamId: TeamID;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  yellowCards: number;
  redCards: number;
  points: number;
  form: string;
  isQualified?: boolean;
  isAlternateQualified?: boolean;
};

export type Stage =
  | 'group'
  | 'season'
  | 'semi-final'
  | 'final'
  | 'third-place'
  | 'quarter-final';

export type Tag = 'exhibition' | 'over-40' | 'dmvvl';

export type MatchRecord = { home: number; away: number };

export type MatchResultInfo = {
  name?: string;
  count: number;
  shirtNumber?: number;
  ownGoal?: boolean;
};

type MatchResult = {
  score: MatchRecord;
  goalScorers?: { home: MatchResultInfo[]; away: MatchResultInfo[] };
  redCards?: { home: MatchResultInfo[]; away: MatchResultInfo[] };
  yellowCards?: { home: MatchResultInfo[]; away: MatchResultInfo[] };
  penalties?: MatchRecord;
};

export type Schedule = {
  time: Date | string;
  homeTeamId: TeamID;
  awayTeamId: TeamID;
  matchDay: number;
  group?: string;
  stage: Stage;
  tag: Tag;
  matchResult?: MatchResult;
  underReview?: boolean;
};
