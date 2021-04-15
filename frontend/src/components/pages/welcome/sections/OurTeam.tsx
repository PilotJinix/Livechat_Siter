// NODE_MODULES
import { FC } from "react";

const teams: {
  nama: string;
  nim: string;
  github: string;
}[] = [
  {
    nama: "Dewangga Putra Kuswanto",
    nim: "182410103005",
    github: "dewangga-pk",
  },
  {
    nama: "Muhammad Faisal Amruddin",
    nim: "182410103012",
    github: "flamrdevs",
  },
  {
    nama: "Muhammad Rizki Attoilah",
    nim: "182410103018",
    github: "rifalrizki12",
  },
  {
    nama: "Dyah Ayuningtyas",
    nim: "182410103031",
    github: "Dyahtyas",
  },
  {
    nama: "Meliatiya Arifviyana",
    nim: "182410103037",
    github: "meliatiya24",
  },
  {
    nama: "Azizah Nurul Firdausi Amijaya",
    nim: "182410103042",
    github: "AzizahN",
  },
  {
    nama: "Nauval Acmad Yusufa",
    nim: "182410103078",
    github: "nauval123",
  },
  {
    nama: "M. Nur Ridho Taufikurrahman",
    nim: "182410103077",
    github: "rido154",
  },
  {
    nama: "Muhammad Agung Santoso",
    nim: "182410103081",
    github: "PilotJinix",
  },
  {
    nama: "Ferdy Dwi Kurniawan",
    nim: "182410103090",
    github: "Ferdydwikurniawan",
  },
];

export const OurTeam: FC = () => {
  return (
    <section className="text-neutral-600 body-font">
      <div className="container px-5 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-neutral-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Team team team team team team team team team team team team team
            team team team team team team team team team team team team team
            team team team team team team team team team team team team team
            team team team team team team team team team team team team team
            team team team team team.
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* Teams */}
          {teams.map((team, index) => (
            <div key={index} className="p-2 md:w-1/2 w-full">
              <div
                className="h-full flex items-center hover:bg-neutral-200 transition-colors duration-200 ease-in-out border-neutral-200 border p-4 rounded-lg"
                onClick={() => window.open(`https://github.com/${team.github}`)}
              >
                <img
                  alt="team"
                  className="w-16 h-16 bg-neutral-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={`https://github.com/${team.github}.png`}
                />
                <div className="flex-grow">
                  <h2 className="text-neutral-900 title-font font-medium">
                    {team.nama}
                  </h2>
                  <p className="text-neutral-500">{team.nim}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
