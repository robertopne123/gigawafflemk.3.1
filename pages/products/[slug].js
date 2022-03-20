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
import { ApolloProvider, gql, useMutation } from "@apollo/client";
import client from "../../lib/apollo";
import Link from "next/link";
import { BlogPageContent } from "../../components/blog/blogPageContent";
import CartContext from "../../components/shop/context";
import { useContext } from "react";

export default function Product({ product, products, preview }) {
  const ADDTOCART = gql`
    mutation AddToCart($productId: Int!, $quantity: Int!) {
      addToCart(input: { productId: $productId, quantity: $quantity }) {
        clientMutationId
      }
    }
  `;

  const [mutateFunction, { data, loading, error }] = useMutation(ADDTOCART, {
    client: client,
    onCompleted: (data) => {
      console.log("complete", data);
    },
  });

  const { items, addToCart, removeFromCart } = useContext(CartContext);

  console.log(data);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>
            {product?.name} | Gigawaffle | Web Design & Social Media Specialists
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
                  src={product?.image.sourceUrl}
                  className="w-2/3 aspect-square object-cover ml-auto"
                ></img>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-parkson lg2:text-8xl lg3:text-8xl lg:text-8xl sm:text-7xl text-6xl">
                {product?.name}
              </h1>
              <div className="bg-gigapink h-[30px] flex flex-col justify-center w-[120px] rounded-full mb-4">
                <p className="font-parkson text-xl text-center text-white w-[120px]">
                  {product?.productCategories.nodes[0].name}
                </p>
              </div>
              <p className="font-poppins text-3xl">{product?.price}</p>
              <div className="bg-gigapink py-2 w-[150px]">
                <p
                  className="font-parkson text-xl text-center text-white w-[150px] cursor-pointer"
                  onClick={() =>
                    function () {
                      mutateFunction({
                        variables: {
                          productId: product?.databaseId,
                          quantity: 1,
                        },
                      });
                      addToCart(product);
                    }
                  }
                >
                  Add To Basket
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <BlogPageContent content={post.content} /> */}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export async function addProductToCart(id, qty) {
  await addToCart(id, qty);
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getSingleProduct(params);

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProductsWithSlug();
  console.log(allProducts);

  return {
    paths: allProducts.edges.map(({ node }) => `/products/${node.slug}`) || [],
    fallback: true,
  };
}
