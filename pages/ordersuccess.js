import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Navbar } from "../components/navbar";
import { HeroHome } from "../components/home/hero";
import { HomeIntro } from "../components/home/intro";
import { HomeServices } from "../components/home/services";
import { HomeStats } from "../components/home/stats";
import { ProjectViewer } from "../components/home/projects";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Loading } from "../components/loading";
import { Thanks } from "../components/thanks";
import { OrderThanks } from "../components/orderthanks";
import { useRouter } from "next/router";

export default function OrderSuccess() {
  const router = useRouter();
  const {
    query: { orderData },
  } = router;

  function getFormattedCart() {
    if (orderData !== undefined) {
      let orderRecordString = orderData[1];

      let orderRecords = orderRecordString.split(":");

      let cart = [];

      for (let i = 0; i < orderRecords.length - 1; i += 2) {
        let cartId = orderRecords[i];
        let cartItems = orderRecords[i + 1]?.split(",");

        let cartRecord = {
          id: cartId,
          name: cartItems[0],
          price: cartItems[1],
          qty: cartItems[2],
        };

        cart.push(cartRecord);
      }

      return cart;
    } else {
      return [];
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Thanks for your purchase | Gigawaffle | Web Dsesign & Social Media
          Specialists
        </title>
        <meta
          name="description"
          content="Waffle-free marketing and branding specialists. Take your business to that next level with eye-catching branding, a modern responsive website and engaging social media."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar colour="white" />
      <OrderThanks
        ordernumber={orderData === undefined ? "" : orderData[0]}
        cart={getFormattedCart()}
      />
    </div>
  );
}
