import { Button } from '@/features/common/ui/Button';
import SelectYear from '@/features/common/ui/SelectYear';
import AppContext from '@/lib/AppContext';
import { getTeamById } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useContext } from 'react';
import MatchResults from './MatchResults';
import AddGameSection from './AddGameSection';
import MatchOverviewCard from '../common/ui/MatchOverviewCard';

const Referee = () => {
  const { seasonSchedule, teams } = useContext(AppContext);

  const selectedSchedule = seasonSchedule[1];
  const homeTeam = getTeamById(teams, selectedSchedule.homeTeamId);
  const awayTeam = getTeamById(teams, selectedSchedule.awayTeamId);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
      <AddGameSection/>
      </div>
      <div>
        <h3 className='text-blue-900 text-base font-medium'>Resent Games</h3>
        <div className='w-10 h-0.5 bg-[#5FA5F9]'></div>
      </div>
      <MatchOverviewCard/>
      <MatchOverviewCard/>
      {/* <SelectYear value={new Date().getFullYear().toString()} />
      <Tabs defaultValue="homeTeam" className="">
        <TabsList className="rounded-3xl border-2 border-blue-900/25">
          <TabsTrigger
            value="homeTeam"
            className="rounded-3xl px-8 py-2 data-[state=active]:bg-blue-300 ">
            {homeTeam.shortName}
          </TabsTrigger>
          <TabsTrigger
            value="awayTeam"
            className="rounded-3xl px-8 py-2 data-[state=active]:bg-blue-300 ">
            {awayTeam.shortName}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="homeTeam" className="">
          <MatchResults schedule={selectedSchedule} teamId={homeTeam.id} />
        </TabsContent>
        <TabsContent value="awayTeam">
          <MatchResults schedule={selectedSchedule} teamId={awayTeam.id} />
        </TabsContent>
      </Tabs>

      <Button className="bg-blue-900">Publish Game Results</Button> */}
    </div>
  );
};

export default Referee;
