import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { Navbar } from "../../components/navbar";
import { Footer } from "..//../components/footer";
import {
  getSingleProduct,
  getAllProductsWithSlug,
  addToCart,
} from "../../lib/api";
import { ApolloProvider, gql, useMutation, useQuery } from "@apollo/client";
import client from "../../lib/apollo";
import Link from "next/link";
import { BlogPageContent } from "../../components/blog/blogPageContent";
import CartContext from "../../components/shop/context";
import { useContext } from "react";
import { addToCartBtn } from "../../components/cart";
import CartBtn from "../../components/cartbtn";
import { useRouter } from "next/router";

export default function Product({ product, products, preview }) {
  const getSlug = () => {
    let parts = asPath.split("/");
    console.log(parts);
    let length = parts.length;

    return parts[length - 1];
  };

  const { asPath, pathname } = useRouter();

  const GETPRODUCT = gql`
    query getSingleProduct($id: ID!) {
      product(id: $id, idType: SLUG) {
        id
        productCategories {
          nodes {
            name
          }
        }
        image {
          sourceUrl
        }
        name
        slug
        ... on SimpleProduct {
          id
          name
          price
        }
        databaseId
      }
    }
  `;

  const { data, loading, error } = useQuery(GETPRODUCT, {
    client: client,
    onCompleted: (data) => {
      console.log("complete", data);
    },
    variables: {
      id: getSlug(),
    },
  });

  const ADDTOCART = gql`
    mutation AddToCart($productId: Int!, $quantity: Int!) {
      addToCart(input: { productId: $productId, quantity: $quantity }) {
        clientMutationId
      }
    }
  `;

  const [mutateFunction, { mData, mLoading, mError }] = useMutation(ADDTOCART, {
    client: client,
    onCompleted: (mData) => {
      console.log("complete", mData);
    },
  });

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>
            {data?.product?.name} | Gigawaffle | Web Design & Social Media
            Specialists
          </title>
          <meta
            name="description"
            content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <Navbar colour="white" shop="show" />
        <div className="w-full px-4 py-20">
          <div className="max-w-[1250px] mx-auto min-h-[calc(100vh-82px)] grid grid-cols-2 gap-10">
            <div className="flex flex-row justify-end">
              <div className="flex flex-col ml-auto">
                <img
                  src={data?.product?.image.sourceUrl}
                  className="w-2/3 aspect-square object-cover ml-auto"
                ></img>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-parkson lg2:text-8xl lg3:text-8xl lg:text-8xl sm:text-7xl text-6xl">
                {data?.product?.name}
              </h1>
              <div className="bg-gigapink h-[30px] flex flex-col justify-center w-[120px] rounded-full mb-4">
                <p className="font-parkson text-xl text-center text-white w-[120px]">
                  {data?.product?.productCategories.nodes[0].name}
                </p>
              </div>
              <p className="font-poppins text-3xl">{data?.product?.price}</p>
              <CartBtn product={data?.product}></CartBtn>
            </div>
          </div>
        </div>
        {/* <BlogPageContent content={post.content} /> */}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

// export async function getStaticProps({ params, preview = false, previewData }) {
//   const data = await getSingleProduct(params);

//   return {
//     props: {
//       product: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allProducts = await getAllProductsWithSlug();

//   return {
//     paths: allProducts.edges.map(({ node }) => `/products/${node.slug}`) || [],
//     fallback: true,
//   };
// }
