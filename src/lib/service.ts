// // import httpClient from '@lib/httpCommon';

// import { schedule2023 } from '@/data/schedule';
// import { TEAMS } from '@/data/teams';

// const getMockData = async ({
//   data,
//   delay = 1,
//   error = 'unknown server error',
// }: {
//   data: unknown;
//   delay?: number;
//   error?: string;
// }) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data) {
//         resolve({
//           type: 'Success ✅',
//           data,
//         });
//       } else {
//         reject({
//           type: 'Error ❌',
//           message: error,
//         });
//       }
//     }, delay || 1000);
//   });

// export const getTeams = () => getMockData({ data: TEAMS as unknown });
// export const getSchedules = () =>
//   getMockData({ data: schedule2023 as unknown });
