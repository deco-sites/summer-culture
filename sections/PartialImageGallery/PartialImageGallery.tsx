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
  cut?: number;
}

export default function PartialImageGallery(props: PartialImageGalleryProps) {
  const dataGallery = [
    {
      src:
        "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 20,
      height: 20,
      alt: "img 01",
    },
    {
      src:
        "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 20,
      height: 20,
      alt: "img 02",
    },
    {
      src:
        "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 20,
      height: 20,
      alt: "img 03",
    },
    {
      src:
        "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 20,
      height: 20,
      alt: "img 04",
    },
    {
      src:
        "https://highstil.vtexassets.com/assets/vtex.file-manager-graphql/images/85c035e6-bbfb-499e-9db7-929a6ac087e9___4d2257d2491ab893eef68ba312f46e88.png",
      width: 20,
      height: 20,
      alt: "img 05",
    },
  ];

  const SliceDynamyc = dataGallery.length <= 3 ? 3 : (props.cut ?? 3) + 1;

  return (
    <section className="w-full max-w-56 flex flex-row gap-4 flex-wrap overflow-visible">
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

      {dataGallery.slice(0, props.cut ?? 3).map((el, i) => (
        <>
          <div key={i} className="w-full max-w-24 overflow-visible">
            <Image
              src={el.src}
              width={96}
              height={96}
              class="transition-transform duration-300 hover:scale-125 origin-center"
            />
          </div>
        </>
      ))}
    </section>
  );
}
