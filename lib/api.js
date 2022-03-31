import { useQuery, gql } from "@apollo/client";
import React from "react";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  console.log(API_URL);

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

const GETALLPOSTS = gql`
  query postsQuery {
    posts {
      edges {
        node {
          title
          categories {
            nodes {
              name
            }
          }
          excerpt
          slug
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export async function getPosts() {
  const { data, loading, error } = useQuery(GETALLPOSTS);
  return data?.posts?.edges;
}

export async function getSinglePost(params) {
  const data = await fetchAPI(
    `query getSinglePost($id: ID!) {
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
  `,
    {
      variables: { id: params.slug },
    }
  );

  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    query GetPostsWithSlug {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllProducts() {
  const data = await fetchAPI(`
  query GetAllProducts {
    products {
      nodes {
        image {
          sourceUrl
        }
        name
        productCategories {
          nodes {
            name
          }
        }
        slug
        ... on SimpleProduct {
          id
          name
          price
        }
      }
    }
  }`);

  return data?.products.nodes;
}

export async function getSingleProduct(params) {
  const data = await fetchAPI(
    `query getSingleProduct($id: ID!) {
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
  `,
    {
      variables: { id: params.slug },
    }
  );

  return data?.product;
}

export async function getAllProductsWithSlug() {
  const data = await fetchAPI(`
    {
      products(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.products;
}

export async function addToCart(id, qty) {
  const result = await fetchAPI(
    `mutation AddToCart {
    addToCart(input: {productId: $productId, quantity: $quantity}) {
      clientMutationId
    }
  }`,
    {
      variables: { productId: id, quantity: qty },
    }
  );

  console.log("Added");
  return result;
}
