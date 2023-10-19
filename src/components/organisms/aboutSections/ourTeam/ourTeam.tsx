import React from "react";

import BigAvatar from "../../avatar/bigAvatar";

type Props = {
  ourTeamData: any;
  team: any;
};
interface Person {
  name: string;
  role: string;
  imageUrl: string;
  fields: any;
}
const ourTeam = ({ ourTeamData, team }: Props) => {
  return (
    <div className="mx-auto mb-12 mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {ourTeamData[0].fields.heading}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {ourTeamData[0].fields.tagline}
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
        {team.map((person: Person, index: number) => (
          <BigAvatar person={person} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ourTeam;
