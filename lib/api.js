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

export async function getPosts() {
  const data = await fetchAPI(
    `query postsQuery {
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
    `,
    {
      variables: {},
    }
  );
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
    {
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
