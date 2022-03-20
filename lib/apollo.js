import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = process.env.WORDPRESS_API_URL;

const client = new ApolloClient({
  uri: "https://goofy-lichterman.213-175-196-12.plesk.page/graphql",
  cache: new InMemoryCache(),
});

export default client;
