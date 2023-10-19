import client from "@/utils/contentful";

import BlogComponent from "@/components/organisms/blog/blogComponent";

type Props = {
  blogData: any;
  blogPageData: any;
};

function Blog({ blogData, blogPageData }: Props) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {blogPageData[0].fields.heading}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {blogPageData[0].fields.tagline}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogData.map((post: any) => (
              <BlogComponent post={post} key={post.sys.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data from Contentful during the build process
export async function getStaticProps() {
  let blogData = null;
  let blogPageData = null;

  try {
    // Fetch Blog Posts
    const blogResponse = await client.getEntries({
      content_type: "blogPost",
    });
    blogData = blogResponse.items;

    // Fetch Blog Posts
    const blogContent = await client.getEntries({
      content_type: "blogData",
    });
    blogPageData = blogContent.items;
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
  }

  return {
    props: {
      blogData,
      blogPageData,
    },
    revalidate: 6, // Regenerate the page every 60 seconds. Adjust this value as needed.
  };
}
export default Blog;
