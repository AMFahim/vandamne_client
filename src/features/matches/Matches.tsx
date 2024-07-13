import { NormalizedObject, Schedule } from '@/data/types';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/features/common/ui/Tabs';
import AppContext from '@/lib/AppContext';
import { useContext } from 'react';
import MatchGroup from './MatchGroup';
const getPlayoffKey = (schedule: Schedule): string => schedule.stage;
const getPlayoffFilter = (schedule: Schedule): boolean =>
  schedule.stage !== 'season';
const getSeasonKey = (schedule: Schedule): string => `${schedule.matchDay}`;
const getSeasonFilter = (schedule: Schedule): boolean =>
  schedule.stage === 'season';

const getGroupData = (
  schedule: Schedule[],
  keyFn: (_: Schedule) => string,
  filterFn: (_: Schedule) => boolean,
): NormalizedObject<Schedule[]> => {
  const result: NormalizedObject<Schedule[]> = { allIds: [], byId: {} };

  schedule.filter(filterFn).forEach((item) => {
    const key = keyFn(item);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (result.byId[key] !== undefined) {
      result.byId[key].push(item);
    } else {
      result.byId[key] = [item];
      result.allIds.push(key);
    }
  });

  return result;
};

const Matches = () => {
  const { seasonSchedule } = useContext(AppContext);
  const playoffData = getGroupData(
    seasonSchedule,
    getPlayoffKey,
    getPlayoffFilter,
  );
  const regularSeasonData = getGroupData(
    seasonSchedule,
    getSeasonKey,
    getSeasonFilter,
  );

  return (
    <div className="flex flex-col bg-gray-100 p-4 md:px-0">
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
          <MatchGroup data={regularSeasonData} />
        </TabsContent>
        <TabsContent value="playoffs">
          <MatchGroup data={playoffData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Matches;
