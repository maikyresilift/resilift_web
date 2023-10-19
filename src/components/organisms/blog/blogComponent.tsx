import React from "react";
import Image from "next/image";

import { slugify } from "@/utils/strings/slufigy";

type Props = {
  post: {
    sys: {
      id: string;
    };
    fields: {
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      date: string;
      tag: string[];
      title: string;
      content: string;
      author: {
        fields: {
          avatar: {
            fields: {
              file: {
                url: string;
              };
            };
          };
          firstName: string;
          lastName: string;
          position: string;
        };
      };
    };
  };
};

const BlogComponent: React.FC<Props> = ({ post }) => {
  return (
    <article
      key={post.sys.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          height={200}
          width={200}
          src={`https:${post.fields.image.fields.file.url}`}
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.fields.date} className="text-gray-500">
            {post.fields.date}
          </time>
          <a
            href={post.fields.tag[0]}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {post.fields.tag[0]}
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={`blog/${slugify(post.fields.title)}`}>
              <span className="absolute inset-0" />
              {post.fields.title}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            {post.fields.content}
          </p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <Image
              height={40}
              width={40}
              src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a
                  href={
                    post.fields.author.fields.firstName +
                    " " +
                    post.fields.author.fields.lastName
                  }>
                  <span className="absolute inset-0" />
                  {post.fields.author.fields.firstName +
                    " " +
                    post.fields.author.fields.lastName}
                </a>
              </p>
              <p className="text-gray-600">
                {post.fields.author.fields.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogComponent;
