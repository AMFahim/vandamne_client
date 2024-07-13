import { TableStats } from '@/data/types';
import { ColumnDef } from '@tanstack/react-table';
import MatchFormCell from './MatchFormCell';
import SortHeader from './SortHeader';
import TeamCell from './TeamCell';
import ValueCell from './ValueCell';

export const columns: ColumnDef<TableStats>[] = [
  {
    accessorKey: 'teamId',
    header: 'Club',
    cell: ({ cell, getValue }) => (
      <TeamCell
        teamId={getValue() as number}
        isQualified={cell.row.original.isQualified}
        isAlternateQualified={cell.row.original.isAlternateQualified}
        position={cell.row.original.position}
      />
    ),
    size: 200,
    minSize: 200,
    maxSize: 200,
  },
  {
    accessorKey: 'gamesPlayed',
    header: ({ column }) => <SortHeader column={column} heading="Played" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'wins',
    header: ({ column }) => <SortHeader column={column} heading="Won" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'losses',
    header: ({ column }) => <SortHeader column={column} heading="Lost" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'draws',
    header: ({ column }) => <SortHeader column={column} heading="Drawn" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'goalsFor',
    header: ({ column }) => <SortHeader column={column} heading="GF" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'goalsAgainst',
    header: ({ column }) => <SortHeader column={column} heading="GA" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'goalsDifference',
    header: ({ column }) => <SortHeader column={column} heading="GD" />,
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'points',
    header: 'Points',
    cell: ({ getValue }) => (
      <ValueCell
        className="font-semibold text-blue-900"
        value={getValue() as string}
      />
    ),
  },
  {
    accessorKey: 'form',
    header: 'Form',
    cell: ({ getValue }) => <MatchFormCell form={getValue() as string} />,
  },
];

export const columnsFirst: ColumnDef<TableStats>[] = [
  {
    accessorKey: 'teamId',
    header: 'Club',
    cell: ({ cell, getValue }) => (
      <TeamCell
        teamId={getValue() as number}
        isQualified={cell.row.original.isQualified}
        isAlternateQualified={cell.row.original.isAlternateQualified}
        position={cell.row.original.position}
      />
    ),
    size: 200,
    minSize: 200,
    maxSize: 200,
  },
];

export const columnsSmall: ColumnDef<TableStats>[] = [
  {
    accessorKey: 'gamesPlayed',
    header: 'PL',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'wins',
    header: 'W',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'losses',
    header: 'L',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'draws',
    header: 'D',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'points',
    header: 'Pts',
    cell: ({ getValue }) => (
      <ValueCell
        className="font-semibold text-blue-900"
        value={getValue() as string}
      />
    ),
  },
  {
    accessorKey: 'goalsFor',
    header: 'GF',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'goalsAgainst',
    header: 'GA',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'goalsDifference',
    header: 'GD',
    cell: ({ getValue }) => <ValueCell value={getValue() as string} />,
  },
  {
    accessorKey: 'form',
    header: 'Form',
    cell: ({ getValue }) => <MatchFormCell small form={getValue() as string} />,
  },
];
