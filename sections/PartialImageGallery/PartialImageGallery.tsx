import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface ImageProps {
  src?: ImageWidget;
  alt?: string;
}

export interface PartialImageGalleryProps {
  /** @minItems 3 */
  /** @maxItems 5 */
  images: ImageProps[];

  /** @hide */
  cut?: number;
}

export default function PartialImageGallery(props: PartialImageGalleryProps) {
  console.log(props.images);
  const dataGallery = [
    {
      src: props.images
        ? props.images[0].src
        : "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 269,
      height: 269,
      alt: "img 01",
    },
    {
      src: props.images
        ? props.images[1].src
        : "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 269,
      height: 269,
      alt: "img 02",
    },
    {
      src: props.images
        ? props.images[2].src
        : "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 269,
      height: 269,
      alt: "img 03",
    },
    {
      src: props.images
        ? props.images[3].src
        : "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 269,
      height: 269,
      alt: "img 04",
    },
    {
      src: props.images
        ? props.images[4].src
        : "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 269,
      height: 269,
      alt: "img 05",
    },
  ];

  const SliceDynamyc = dataGallery.length <= 3 ? 3 : (props.cut ?? 3) + 1;

  return (
    <section className="w-full mx-auto max-w-3xl grid items-center gap-4 overflow-visible">
      <div class="grid grid-cols-2 lg:gap-y-20 auto-cols-max">
        {dataGallery.slice(0, props.cut ?? 3).map((el, i) => (
          <>
            <div
              key={i}
              className="flex justify-center w-full overflow-visible"
            >
              <Image
                src={el.src}
                width={269}
                height={269}
                class="transition-transform duration-300 hover:scale-125 origin-center"
              />
            </div>
          </>
        ))}
      </div>
      {SliceDynamyc < dataGallery.length + 1 && (
        <button
          className="block"
          {...usePartialSection({
            props: {
              cut: SliceDynamyc,
            },
          })}
        >
          Showmore
        </button>
      )}
    </section>
  );
}
