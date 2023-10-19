import React from "react";
import type { NextPage } from "next";
import { set, useForm } from "react-hook-form";
import { FormEvent, useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type ContactData = {
  heading: string;
  tagline: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  phoneData: string;
  emailData: string;
};

export default function Contact({
  heading,
  tagline,
  street,
  city,
  state,
  zipcode,
  phoneData,
  emailData,
}: ContactData) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formSubmitted, setformSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    const rawResponse = await fetch("/api/mongo/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const content = await rawResponse.json();
    setformSubmitted(true);
    reset();
  };

  return (
    <>
      <div className="relative isolate bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{tagline}</p>
              {/* <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    {street}
                    <br />
                    {city},{state + " " + zipcode}
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href={`tel:+${phoneData}`}>
                      +{phoneData}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com">
                      {emailData}
                    </a>
                  </dd>
                </div>
              </dl> */}
            </div>
          </div>
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 ">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      {...register("name", { required: "Name is required." })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 sm:max-w-sm"
                    />
                    {errors.name && typeof errors.name.message === "string" && (
                      <span className="text-red-500 text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required." })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 sm:max-w-sm"
                    />
                    {errors.email &&
                      typeof errors.email.message === "string" && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Telephone
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required.",
                      })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 sm:max-w-sm"
                    />
                    {errors.phone &&
                      typeof errors.phone.message === "string" && (
                        <span className="text-red-500 text-sm">
                          {errors.phone.message}
                        </span>
                      )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      rows={6}
                      {...register("message", {
                        required: "Message is required.",
                      })}
                      className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 sm:max-w-sm"
                    />
                    {errors.message &&
                      typeof errors.message.message === "string" && (
                        <span className="text-red-500 text-sm">
                          {errors.message.message}
                        </span>
                      )}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end max-w-sm">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Send message
                </button>
              </div>
              <br></br>
              {formSubmitted && (
                <h1>Thank you we will get back to you shortly.</h1>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
