import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  eixo: "flex-col" | "flex-row";
  description: string;
  price: number;
  image: {
    src: string;
    alt: string;
  };
}

export default function HorizontalProductCard(props: Props) {
  const { title, description, price, image, eixo } = props;

  return (
    <>
      <div className="flex flex-row justify-center align-middle rounded-lg border-solid border p-4">
        {image.src && (
          <Image
            src={image.src}
            className="w-full max-w-xs h-full object-cover"
            width={200}
            height={120}
            alt={image.alt}
          />
        )}

        <div className={`${eixo} flex p-1`}>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-ellipsis text-primary">
              {title}
            </h3>

            <p className="text-ellipsis text-primary">
              {description}
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
          </div>
          <p className="">R$ {price}</p>
          <button className="w-full border rounded-lg flex flex-row  items-center justify-center h-10 bg-secondary hover:opacity-60">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}
