import React from "react";
import Image from "next/image";

type Props = {
  heading: string;
  tagline: string;
  body: string;
  image: string;
  stat1label: string;
  stat1value: string;
  stat2label: string;
  stat2value: string;
  stat3label: string;
  stat3value: string;
};

const OurMission = (props: Props) => {
  const stats = [
    { label: props.stat1label, value: props.stat1value },
    { label: props.stat2label, value: props.stat2value },
    { label: props.stat3label, value: props.stat3value },
  ];
  return (
    <>
      <div className="mx-auto pt-24 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:mt-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.heading}
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">{props.tagline}</p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>{props.body}</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label + stat.value}
                    className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          height={528}
          width={396}
          src={`https:${props.image}`}
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    </>
  );
};

export default OurMission;
