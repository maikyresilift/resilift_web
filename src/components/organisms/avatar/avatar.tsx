import React from "react";
import Image from "next/image";
interface Person {
  name: string;
  role: string;
  imageUrl: string;
}
type Props = {
  person: Person;
};

const Avatar = ({ person }: Props) => {
  return (
    <li key={person.name}>
      <Image
        height={528}
        width={396}
        className="mx-auto h-24 w-24 rounded-full"
        src={person.imageUrl}
        alt=""
      />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {person.name}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{person.role}</p>
    </li>
  );
};

export default Avatar;
