import Link from "next/link";
import { getAllProducts } from "../../lib/api";
import { useQuery, gql } from "@apollo/client";

export const ShopContainer = () => {
  const GETALLPRODUCTS = gql`
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
    }
  `;

  const { data, loading, error } = useQuery(GETALLPRODUCTS);

  console.log(data);

  if (error) return <p>Error! {error.message}</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-gigapink px-4 py-20">
      <div className="max-w-[1250px] mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10">
        {data.products.nodes.map((product, index) => (
          <Link href={`/products/${product.slug}`} key={index}>
            <a>
              <div className="flex flex-col border-2 border-white relative">
                <img
                  src={product.image.sourceUrl}
                  className="w-full aspect-[1/1] object-cover"
                />
                <div className="bg-gigapink h-[20px] flex flex-col justify-center w-[80px] m-2 absolute top-0">
                  <p className="font-parkson tracking-wide text-md text-center text-white w-[80px]">
                    {product.productCategories.nodes[0].name}
                  </p>
                </div>
                <div className="p-2 flex flex-col gap-2">
                  <p className="font-parkson text-2xl text-white">
                    {product.name}
                  </p>
                  <p className="font-poppins text-white text-sm">
                    {product.price}
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
