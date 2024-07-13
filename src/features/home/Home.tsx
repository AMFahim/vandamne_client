import MatchRow from '@/features/matches/MatchRow';
import MatchRowCollapsible from '@/features/matches/MatchRowCollapsible';
import AppContext from '@/lib/AppContext';
import { getPrevAndNextMatchDays } from '@/lib/utils';
import { MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

const SectionTitle = ({ title, link }: { title: string; link: string }) => (
  <div className="mb-4 flex justify-between">
    <div className="text-lg font-medium">{title}</div>
    <Link href={link} className="text-blue-600">
      See all
    </Link>
  </div>
);

const Home = () => {
  const { seasonSchedule } = useContext(AppContext);

  const { prev, next } = getPrevAndNextMatchDays(new Date(), seasonSchedule);
  const recentMatches = seasonSchedule.filter((item) => item.matchDay === prev);
  const upcomingMatches = seasonSchedule.filter(
    (item) => item.matchDay === next,
  );
  // TODO fix display on mobile
  // TODO add shop tab
  // TODO add year selection to navbar
  // TODO add anchor tags
  // TODO add youtube link
  return (
    <div className="mb-4 flex flex-col gap-8 p-4">
      <div>
        <SectionTitle
          title="Recent matches"
          link={`/matches#matchDay${prev}`}
        />
        <div className="flex gap-2 overflow-auto">
          {recentMatches.map((schedule) => (
            <div
              key={`${schedule.homeTeamId}${
                schedule.awayTeamId
              }${schedule.time.toString()}`}>
              {/* Desktop */}
              <div className="hidden">
                <MatchRowCollapsible schedule={schedule} />
              </div>
              {/* Mobile */}
              <div className="w-max md:hidden">
                <MatchRow className="bg-blue-400/50" schedule={schedule} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle
          title="Upcoming matches"
          link={`/matches#matchDay${next}`}
        />
        <div className="flex flex-col gap-4">
          {upcomingMatches.map((schedule) => (
            <MatchRow
              key={`${schedule.homeTeamId}${
                schedule.awayTeamId
              }${schedule.time.toString()}`}
              schedule={schedule}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="my-4 flex text-lg font-medium">Field Address</div>
        <div className="flex gap-4">
          <MapPinIcon
            className="h-10 w-10 opacity-80"
            strokeWidth={1}
            fill="orange"
            stroke="white"
          />
          <Link href="https://maps.app.goo.gl/mTEaKoinrFmnPdnc8">
            <p className="text-sm font-medium">
              Martin Luther Kin Jr. Recreational Park
            </p>
            <p>1120 Jackson Rd Silver Spring MD 20904</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
