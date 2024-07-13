'use client';

import * as React from 'react';

import { Schedule } from '@/data/types';
import { Button } from '@/features/common/ui/Button';
import AppContext from '@/lib/AppContext';
import { getTeamById } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MatchDayTime from './MatchDayTime';
import MatchScoreTime from './MatchScoreTime';
import MatchStatsRow from './MatchStatsRow';
import TeamWithBadge from './TeamWithBadge';

const MatchRowCollapsible = ({ schedule }: { schedule: Schedule }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { teams } = React.useContext(AppContext);
  const homeTeam = getTeamById(teams, schedule.homeTeamId);
  const awayTeam = getTeamById(teams, schedule.awayTeamId);

  const matchResult = schedule.matchResult;
  const hasMatchDetails =
    matchResult?.goalScorers !== undefined ||
    matchResult?.yellowCards !== undefined ||
    matchResult?.redCards !== undefined;

  const isHomeTeamWinner =
    (matchResult?.score.home ?? 0) > (matchResult?.score.away ?? 0);
  const isAwayTeamWinner =
    (matchResult?.score.away ?? 0) > (matchResult?.score.home ?? 0);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2">
      <div className="grid grid-cols-12 items-center space-x-4">
        <div className="col-span-3 self-center p-2">
          <MatchDayTime tag={schedule.tag} kickoffTime={schedule.time} />
        </div>
        <div className="col-span-8 flex w-full self-center p-2 lg:gap-8">
          <TeamWithBadge
            badgePosition="right"
            team={homeTeam}
            isWinner={isHomeTeamWinner}
          />
          <MatchScoreTime schedule={schedule} showVs />
          <TeamWithBadge
            badgePosition="left"
            team={awayTeam}
            isWinner={isAwayTeamWinner}
          />
        </div>
        {hasMatchDetails && (
          <CollapsibleTrigger
            className="col-span-1 flex w-full justify-end"
            asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0 ">
              {!isOpen && (
                <ChevronDown
                  className="h-6 w-6 stroke-blue-900"
                  strokeWidth={3}
                />
              )}
              {isOpen && (
                <ChevronUp
                  className="h-6 w-6 stroke-blue-900"
                  strokeWidth={3}
                />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>
      <CollapsibleContent className=" space-y-2">
        <div className="grid grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-8">
            <div className="divider px-64"></div>
            {hasMatchDetails && <MatchStatsRow schedule={schedule} />}
          </div>
          <div className="col-span-2"></div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MatchRowCollapsible;
