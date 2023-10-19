import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { slugify } from "@/utils/strings/slufigy";
import client from "@/utils/contentful";

type Props = {
  post: any;
};

const BlogPostPage: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className="bg-white ">
        <div className="mt-20 sm:mt-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            height={528}
            width={396}
            src={`https:${post.fields.image.fields.file.url}`}
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.fields.title}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {post.fields.shortSummary}
            </p>
            <div className="flex flex-col">
              <Image
                height={200}
                width={200}
                src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
                alt=""
                className="inset-0 h-16 w-16 rounded-2xl bg-gray-50 object-cover"
              />
              <h4>
                {post.fields.author.fields.firstName}{" "}
                {post.fields.author.fields.lastName}
              </h4>
              <h5>{post.fields.author.fields.position}</h5>
            </div>
            <div className="prose">{post.fields.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;

  try {
    // Fetch all blog posts
    const response = await client.getEntries({
      content_type: "blogPost",
    });

    // Find the specific post that matches the slug
    const post = response.items.find(
      (post: any) => slugify(post.fields.title) === slugify(slug)
    );

    // If post doesn't exist, return notFound
    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 6,
    };
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
    return { notFound: true };
  }
};
type PathType = {
  params: {
    slug: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: PathType[] = [];

  try {
    const response = await client.getEntries({
      content_type: "blogPost",
    });

    paths = response.items.map((post: any) => ({
      params: { slug: slugify(post.fields.title) },
    }));
  } catch (error) {
    console.error("Error fetching Contentful entries for paths:", error);
  }

  return {
    paths,
    fallback: "blocking", // Or you can use 'true' if you want to show a loading state to the user while Next.js generates the page on-demand
  };
};

export default BlogPostPage;
