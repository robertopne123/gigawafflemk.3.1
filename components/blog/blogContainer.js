import Link from "next/link";
import { getPosts } from "../../lib/api";

export const BlogContainer = (props) => {
  return (
    <div className="bg-gigapink px-4 py-20">
      <div className="max-w-[1250px] mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10">
        {props.posts.map((post, index) => (
          <Link href={`/posts/${post.node.slug}`} key={index}>
            <a>
              <div className="flex flex-col gap-2 border-2 border-white relative">
                <img
                  src={post.node.featuredImage.node.sourceUrl}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="bg-gigapink h-[20px] flex flex-col justify-center w-[80px] m-2 absolute top-0">
                  <p className="font-parkson tracking-wide text-md text-center text-white w-[80px]">
                    {post.node.categories.nodes[0].name}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
