import Image from "apps/website/components/Image.tsx";

import TotalProductVotes from "deco-sites/summer-culture/islands/TotalProductVotes/TotalProductVotes.tsx";

import type { Product } from "apps/commerce/types.ts";
import { ProductCardProps } from "deco-sites/summer-culture/flags/multivariate.ts";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { useCart } from "apps/vnda/hooks/useCart.ts";

export interface Props {
  products: ProductCardProps;
  title?: string;
  description?: string;
  animateImage?: boolean;

  /**
     * @format dynamic-options "max-w-xl"
      | "max-w-2xl"
      | "max-w-3xl"
      | "max-w-4xl"
      | "max-w-5xl"
      | "max-w-6xl"
      | "max-w-7xl"
      | "max-w-full";
    */
  sizes:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

function ErrorFallback({ error }: { error?: Error }) {
  return (
    <>
      <Image
        src="https://media.istockphoto.com/id/971123470/pt/foto/beautiful-african-american-woman-in-typical-afro-clothing.jpg?s=612x612&w=0&k=20&c=63v8hzQOP5rmcetp00thJ_gnrKZZSeZUpWR7ZSlQ7DU="
        height={120}
        width={200}
      />
      <h3>Summer Culture</h3>
      <p>Quer saber mais sobre a nossa cultura?</p>
      <a href="/cultura">
        <button>para saber mais</button>
      </a>
    </>
  );
}

export function LoadingFallback() {
  return (
    <div style={{ height: "716px" }} class="flex justify-center items-center">
      <div className="flex flex-row justify-center p-4 align-middle border border-solid rounded-lg">
        <div class=" bg-gray-200 w-52 h-32 animate-pulse " />
        <div className="flex p-1">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-black text-ellipsis">
              <span class="loading loading-spinner" />
              ...carregando
            </h3>

            <p className="text-black text-ellipsis">
              <span class="loading loading-spinner" />
              ...carregando
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
          </div>
          <p className="">
            <span class="loading loading-spinner" />
            ...carregando
          </p>
          <button className="flex flex-row items-center justify-center w-full h-10 border rounded-lg bg-secondary hover:opacity-60">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalProductCard(props: Props) {
  const { products, sizes, animateImage } = props;
  const { addItem } = useCart();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      {products.map((product: Product) => (
        <div
          key={product.productID}
          className={`${sizes} relative mx-auto flex h-64 w-full justify-between align-middle `}
        >
          {product?.image && (
            <figure class="relative max-w-40 overflow-hidden lg:max-w-none">
              <Image
                src={product.image[0].url ?? ""}
                className={`h-full w-full transform object-cover transition-transform duration-500 cursor-pointer ${
                  animateImage ? "hover:scale-110" : ""
                } `}
                width={200}
                height={120}
              />
            </figure>
          )}

          <TotalProductVotes productId={product.productID ?? ""} />

          <div
            className={`flex flex-col w-full items-center py-4 justify-center bg-[#E8E8E8] px-4 md:gap-6 md:flex-row `}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="truncate text-base text-base-content uppercase  font-bold md:text-clip lg:text-lg">
                {products && products[0].name}
              </h3>

              <p className="truncate text-base text-base-content uppercase font-normal md:text-clip lg:text-sm">
                {products && products[0].description}
              </p>
            </div>
            <div class="flex flex-col items-center justify-center">
            </div>
            <p className="text-base-content font-light whitespace-nowrap lg:text-sm ">
              R${"  "}{products && products[0].offers?.offers[0].price}
            </p>

            <AddToCartButtonVTEX
              eventParams={{ items: [] }}
              productID={product.productID}
              seller={"1"}
            />
          </div>
        </div>
      ))}
    </>
  );
}
