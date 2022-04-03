import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { Navbar } from "../../components/navbar";
import { Footer } from "..//../components/footer";
import { getSinglePost, getAllPostsWithSlug } from "../../lib/api";
import Link from "next/link";
import { BlogPageContent } from "../../components/blog/blogPageContent";
import { useRouter } from "next/router";
import { ApolloProvider, gql, useMutation, useQuery } from "@apollo/client";
import client from "../../lib/apollo";

export default function Post({ post, posts, preview }) {
  const getUserAvatar = (description) => {
    if (description !== undefined) {
      let split = description.split(/\r?\n/);
      return split[0];
    } else {
      return null;
    }
  };

  const getUserRole = (description) => {
    if (description !== undefined) {
      let split = description.split(/\r?\n/);
      return split[1];
    } else {
      return null;
    }
  };

  const formattedDate = (date) => {
    if (date !== undefined) {
      const halves = date?.split("T");
      const leftHalf = halves[0].split("-");

      let month = getMonth(leftHalf[1]);
      let day = nth(parseInt(leftHalf[2]));

      return leftHalf[2] + day + " " + month + " " + leftHalf[0];
    } else {
      return null;
    }
  };

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const getMonth = (month) => {
    switch (month) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  };

  const getSlug = () => {
    let parts = asPath.split("/");
    console.log(parts);
    let length = parts.length;

    return parts[length - 1];
  };

  const { asPath, pathname } = useRouter();

  const GETPOST = gql`
    query getSinglePost($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        author {
          node {
            firstName
            lastName
            description
          }
        }
        categories {
          nodes {
            name
          }
        }
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        slug
        uri
      }
    }
  `;

  const { data, loading, error } = useQuery(GETPOST, {
    client: client,
    onCompleted: (data) => {
      console.log("complete", data);
    },
    variables: {
      id: getSlug(),
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {data?.post?.title} | Gigawaffle | Web Design & Social Media
          Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="white" />
      <div className="w-full px-4 py-20">
        <div className="max-w-[1250px] mx-auto min-h-[calc(100vh-82px)]">
          <div className="flex flex-col gap-2">
            <Link href="/blog">
              <a>
                <p className="font-parkson hover:underline">
                  &#60; Back to blog
                </p>
              </a>
            </Link>
            <h1 className="font-parkson lg2:text-9xl lg3:text-9xl lg:text-9xl sm:text-8xl text-7xl">
              {data?.post?.title}
            </h1>
            <div className="flex flex-row gap-2">
              <img
                src={`/staff/${getUserAvatar(
                  data?.post?.author.node.description
                )}.png`}
                className={`w-[40px] h-[40px] rounded-full bg-${
                  getUserRole(data?.post?.author.node.description) === "Web"
                    ? "gigapink"
                    : getUserRole(data?.post?.author.node.description) ===
                      "Brand"
                    ? "white border-2 border-gigapink"
                    : getUserRole(data?.post?.author.node.description) ===
                      "Social"
                    ? "gigablue"
                    : ""
                }`}
              />
              <div className="flex flex-col justify-center">
                <div className="flex flex-row gap-2">
                  <h3 className="font-parkson text-3xl">
                    {data?.post?.author.node.firstName}{" "}
                    {data?.post?.author.node.lastName}
                  </h3>
                  <div className="flex flex-col justify-center">
                    <div className="bg-black w-[5px] h-[5px] rounded-full" />
                  </div>
                  <p className="font-parkson text-3xl">
                    {formattedDate(data?.post?.date)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gigapink h-[30px] flex flex-col justify-center w-[120px] rounded-full">
              <p className="font-parkson text-xl text-center text-white w-[120px]">
                {data?.post?.categories.nodes[0].name}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 py-20">
            <div
              className="font-poppins"
              dangerouslySetInnerHTML={{ __html: data?.post?.content }}
            ></div>
          </div>
        </div>
      </div>
      {/* <BlogPageContent content={post.content} /> */}
      <Footer />
    </div>
  );
}

// export async function getStaticProps({ params, preview = false, previewData }) {
//   const data = await getSinglePost(params);

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();

//   return {
//     paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
//     fallback: true,
//   };
// }
