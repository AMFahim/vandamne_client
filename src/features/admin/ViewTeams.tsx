import { TeamsData } from '@/data/local.db';
import Image from 'next/image';
import Link from 'next/link';

const ViewTeams = () => {
  return (
    <div>
      <div className='mx-5 flex justify-between mt-[62px]'>
        <h1>Teams</h1>
        <Link href={"/admin/allteam"} className='text-blue-500'>View All Teams</Link>
      </div>
      <section className="text-gray-600 body-font mt-4">
      
        <div className="container px-5 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20"></div> */}
          <div className="lg:w-2/3 w-full bg-blue-100 p-3 rounded mx-auto overflow-auto">
            <table className="table-auto w-full whitespace-nowrap">
              <thead>
                <tr>
                  <th className=" text-left title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">
                    Club
                  </th>
                  <th className="pr-[50px] pl-10 text-center title-font font-medium text-gray-900 text-sm w-fit">
                    Games Played
                  </th>
                  <th className="pr-[50px] pl-10 title-font tracking-wider font-medium text-gray-900 text-sm min-w-[100px]">
                    Goals Scored
                  </th>
                  <th className="pr-[50px] pl-10 title-font tracking-wider font-medium text-gray-900 text-sm ">
                    Fines Issued
                  </th>
                  <th className=" title-font tracking-wider font-medium text-gray-900 text-sm rounded-tr rounded-br">
                    Fines Paid
                  </th>
                </tr>
              </thead>
              <tbody>
                {TeamsData.map((data, index) => (
                  <tr key={data.key} className="border-b border-neutral-600">
                    <td className=" py-3 flex gap-1">
                      <span>{index + 1}. </span>
                      <div className="flex gap-2">
                        <Image
                          src={data.logo}
                          height={28}
                          width={28}
                          alt="logo"
                        />
                        {data.name}
                      </div>
                    </td>
                    <td className="text-center">{data.gamePlayed}</td>
                    <td className="text-center">{data.goal}</td>
                    <td className="px-8 py-3">{data.finesIssued}</td>
                    <td className="text-center">{data.finesPaid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewTeams;
