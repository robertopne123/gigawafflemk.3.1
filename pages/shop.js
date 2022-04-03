import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { getAllProducts } from "../lib/api";
import { HeroShop } from "../components/shop/hero";
import { ShopContainer } from "../components/shop/shopContainer";
import Link from "next/link";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

export default function Shop({ products }) {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>Gigawaffle | Web Design & Social Media Specialists</title>
          <meta
            name="description"
            content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <Navbar colour="white" shop="show" />
        <HeroShop />
        <ShopContainer products={products} />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

// export async function getServerSideProps(ctx) {
//   let products = await getAllProducts();
//   return {
//     props: {
//       products,
//     },
//   };
// }
