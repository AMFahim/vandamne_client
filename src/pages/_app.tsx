import { getScheduleByYear } from '@/data/schedule';
import { getTeamsByYear } from '@/data/teams';
import { Schedule, Team } from '@/data/types';
import Layout from '@/features/common/layout/Layout';
import AppContext from '@/lib/AppContext';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useMemo, useState } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const commonLayout = (page: ReactNode) => <Layout>{page}</Layout>;
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [year, setYear] = useState(2024);
  const [seasonSchedule, setSeasonSchedule] = useState<Schedule[]>(
    getScheduleByYear(year),
  );
  const [teams, setTeams] = useState<Team[]>(getTeamsByYear(year));

  const value = useMemo(
    () => ({
      year,
      teams,
      seasonSchedule,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [year, seasonSchedule, teams],
  );

  const getLayout = Component.getLayout ?? commonLayout;
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={value}>
          {getLayout(<Component {...pageProps} />)}
          <Analytics />
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
