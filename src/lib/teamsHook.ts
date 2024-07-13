// import { Team } from '@/data/teams';
// import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';
// import { getTeams } from './service';

// const useTeams = (defaultTeams: Team[]) => {
//   const [teams] = useState<Team[]>(defaultTeams);
//   const { data } = useQuery({
//     queryKey: ['teams', 'a'],
//     queryFn: () => getTeams(),
//   });

//   //   return [teams];
//   return {
//     data,
//   };
// };

// export default useTeams;
