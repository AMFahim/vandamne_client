import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/features/common/ui/Tabs';
import KnockoutGames from '@/features/post-season/KnockoutGames';
import AppContext from '@/lib/AppContext';
import { getTableStats } from '@/lib/utils';
import { useContext, useState } from 'react';
import DataTable from './DataTable';
import DataTableLeft from './DataTableLeft';
import DataTableMobile from './DataTableMobile';
import Qualification from './Qualification';
import { columns, columnsFirst, columnsSmall } from './columns';

// const groups = ['A', 'B', 'C'];
// const keys = ['A', 'B', 'C'] as const;

const groups = ['All'];
const keys = ['All'] as const;
export type Group = (typeof keys)[number];

const LeagueTable = () => {
  const { seasonSchedule, year } = useContext(AppContext);
  // const tableDataList = getTableStatsGroups(seasonSchedule, 1, groups);
  const tableDataList = getTableStats(seasonSchedule, 8);
  const [showRightBorder, setShowRightBorder] = useState({
    A: false,
    B: false,
    C: false,
    All: true,
  });

  const handleScrolledRight = (showRight: boolean, tableId: string) => {
    setShowRightBorder({ ...showRightBorder, [tableId]: showRight });
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      {/* <SelectYear value={new Date().getFullYear().toString()} /> */}

      <Tabs defaultValue="season" className="">
        <div className="flex justify-center">
          <TabsList className="rounded-3xl border-2 border-blue-900/25 py-5">
            <TabsTrigger
              value="season"
              className="rounded-3xl px-8 py-2 text-blue-900 data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Season
            </TabsTrigger>
            <TabsTrigger
              value="playoffs"
              className="rounded-3xl px-8 py-2 text-blue-900 data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Playoffs
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="season" className="">
          <div className="mt-8 flex flex-col gap-8 px-2">
            {tableDataList.map((tableData, index) => (
              <div className="flex flex-col gap-2" key={groups[index]}>
                {groups[index] !== 'All' && (
                  <div className="font-semibold">Group {groups[index]}</div>
                )}
                <div className="hidden bg-white sm:flex">
                  <DataTable columns={columns} data={tableData} />
                </div>
                <div className="flex rounded-t-lg bg-white sm:hidden">
                  <DataTableLeft
                    showRightBorder={showRightBorder[keys[index]]}
                    columns={columnsFirst}
                    data={tableData}
                  />
                  <DataTableMobile
                    tableId={keys[index]}
                    handleScrollingRight={handleScrolledRight}
                    columns={columnsSmall}
                    data={tableData}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 px-2">
            <Qualification year={year} />
          </div>
        </TabsContent>
        <TabsContent value="playoffs">
          <div className="flex justify-center bg-white px-2 sm:bg-inherit">
            <KnockoutGames />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeagueTable;
