import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import client from "../lib/apollo";
import GET_COUNTRIES from "../components/queries/get-countries";
import CheckoutForm from "../components/checkoutForm";

export default function Checkout({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Checkout | Gigawaffle | Web Design & Social Media Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="white" />
      <CheckoutForm countriesData={data?.wooCountries ?? {}}></CheckoutForm>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
