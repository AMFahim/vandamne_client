import { ColumnDef } from '@tanstack/react-table';
import GameCell from './GameCell';
import DataTable from './Table';

type TableData = {
  scheduleIndex?: number;
  id: number;
};

const results: TableData[] = [
  { id: 0 },
  {
    scheduleIndex: 20,
    id: 1,
  },
  { id: 2 },
  {
    scheduleIndex: 24,
    id: 3,
  },
  { id: 4 },
  {
    scheduleIndex: 21,
    id: 5,
  },
  { id: 6 },
  { id: 7 },
  {
    scheduleIndex: 22,
    id: 8,
  },
  { id: 9 },
];
const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: 'id',
    header: 'Semifinals',

    cell: ({ cell }) => (
      <GameCell
        stages={['semi-final']}
        scheduleIndex={cell.row.original.scheduleIndex ?? 0}
      />
    ),
  },
  {
    accessorKey: 'test',
    header: 'Finals / Third Place',
    cell: ({ cell }) => (
      <GameCell
        stages={['final', 'third-place']}
        scheduleIndex={cell.row.original.scheduleIndex ?? 0}
      />
    ),
  },
];

const KnockoutGames = () => <DataTable columns={columns} data={results} />;

export default KnockoutGames;
