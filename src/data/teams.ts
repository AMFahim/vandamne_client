import { Team, TeamID } from './types';

export const teams2023: Team[] = [
  {
    id: TeamID.BLUE,
    name: 'Blue Above 40',
    shortName: 'Blue',
    abbr: 'YLT',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.RED,
    name: 'Red Above 40',
    shortName: 'Red',
    abbr: 'RDT',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.SPARTAN,
    name: 'Spartan Veteran FC',
    shortName: 'Spartan',
    abbr: 'SPV',
    logoId: 'spartan.jpeg',
  },
  {
    id: TeamID.MARLBORO,
    name: 'Marlboro Social Club',
    shortName: 'Marlboro',
    abbr: 'MAS',
    logoId: 'marlboro.png',
  },
  {
    id: TeamID.DELAWARE,
    name: 'Delaware Progressives',
    shortName: 'Delaware',
    abbr: 'DLP',
    logoId: 'delaware-progressives.jpeg',
  },
  {
    id: TeamID.LANHAM,
    name: 'Lanham Veteran FC',
    shortName: 'Lanham',
    abbr: 'LAH',
    logoId: 'lanham.jpeg',
  },
  {
    id: TeamID.ELITE,
    name: 'Elite Vets',
    shortName: 'Elite',
    abbr: 'ELI',
    logoId: 'elite.jpeg',
  },
  {
    id: TeamID.BALISOA,
    name: 'Balisoa FC',
    shortName: 'Balisoa',
    abbr: 'BAL',
    logoId: 'balisoa.svg',
  },
  {
    id: TeamID.VFC,
    name: 'Veteran FC',
    shortName: 'Veteran FC',
    abbr: 'VFC',
    logoId: 'vfc.jpeg',
  },
  {
    id: TeamID.LANDOVER,
    name: 'Landover FC',
    shortName: 'Landover',
    abbr: 'LOV',
    logoId: 'landover.jpeg',
  },
  {
    id: TeamID.SOCIAL,
    name: 'Social Boys FC',
    shortName: 'Social Boyz',
    abbr: 'SOB',
    logoId: 'social-boyz.png',
  },
];

const teams2024: Team[] = [
  {
    id: TeamID.DEFAULT,
    name: 'TBD',
    shortName: 'TBD',
    abbr: 'DEF',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.BLUE,
    name: 'Blue Above 40',
    shortName: 'Blue',
    abbr: 'YLT',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.RED,
    name: 'Red Above 40',
    shortName: 'Red',
    abbr: 'RDT',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.SPARTAN,
    name: 'Spartan Veteran FC',
    shortName: 'Spartan',
    abbr: 'SPV',
    logoId: 'spartan.jpeg',
  },
  {
    id: TeamID.MARLBORO,
    name: 'Marlboro Social Club',
    shortName: 'Marlboro',
    abbr: 'MAS',
    logoId: 'marlboro.png',
  },
  {
    id: TeamID.DELAWARE,
    name: 'Delaware Progressives',
    shortName: 'Delaware',
    abbr: 'DLP',
    logoId: 'delaware-progressives.jpeg',
  },
  {
    id: TeamID.LANHAM,
    name: 'Lanham Veteran FC',
    shortName: 'Lanham',
    abbr: 'LAH',
    logoId: 'lanham.jpeg',
  },
  {
    id: TeamID.ELITE,
    name: 'Elite Vets',
    shortName: 'Elite',
    abbr: 'ELI',
    logoId: 'elite.jpeg',
  },
  {
    id: TeamID.BALISOA,
    name: 'Balisoa Vets',
    shortName: 'Balisoa',
    abbr: 'BAL',
    logoId: 'balisoa.jpeg',
  },
  {
    id: TeamID.VFC,
    name: 'Veteran FC',
    shortName: 'Veteran FC',
    abbr: 'VFC',
    logoId: 'vfc.jpeg',
  },
  {
    id: TeamID.LANDOVER,
    name: 'Landover FC',
    shortName: 'Landover',
    abbr: 'LOV',
    logoId: 'landover.jpeg',
  },
  {
    id: TeamID.SOCIAL,
    name: 'Social Boys',
    shortName: 'Social Boyz',
    abbr: 'SOB',
    logoId: 'social-boyz.png',
  },
  {
    id: TeamID.NOVA,
    name: 'NOVA Vets',
    shortName: 'NOVA Vets',
    abbr: 'NOV',
    logoId: 'nova.jpeg',
  },
  {
    id: TeamID.BALTIMORE,
    name: 'Baltimore Vets',
    shortName: 'Baltimore',
    abbr: 'BAV',
    logoId: 'baltimore.jpeg',
  },
  {
    id: TeamID.BAFUT,
    name: 'Bafut Social Club',
    shortName: 'Bafut SC',
    abbr: 'BSC',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.MUSTUS,
    name: 'MUSTUS Vets',
    shortName: 'MUSTUS',
    abbr: 'MUS',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.BIROCOL,
    name: 'BIROCOL',
    shortName: 'BIROCOL',
    abbr: 'BIR',
    logoId: 'shirt.svg',
  },
  {
    id: TeamID.SHESANS,
    name: 'SHESANS',
    shortName: 'SHESANS',
    abbr: 'SHE',
    logoId: 'shirt.svg',
  },
];

const teamsByYear = {
  2023: teams2023,
  2024: teams2024,
};

const getTeamsByYear = (year: number): Team[] => {
  if (year === 2023 || year === 2024) {
    return teamsByYear[year];
  }

  return [];
};

export { getTeamsByYear };
