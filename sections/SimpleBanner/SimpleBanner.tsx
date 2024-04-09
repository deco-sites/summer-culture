import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
export interface Props {
  desktop: ImageWidget;
  mobile: ImageWidget;
  width: number;
  widthMobile: number;
  height: number;
  heightMobile: number;
  lcp?: boolean;
  preload?: boolean;
  alt: string;
}

export default function SimpleImage(props: Props) {
  return (
    <Picture preload={props.lcp}>
      <Source
        media="(max-width: 767px)"
        fetchPriority={props.lcp ? "high" : "auto"}
        src={props.mobile}
        loading={props.lcp ? "eager" : "lazy"}
        preload={props.preload}
        width={props.widthMobile}
        height={props.heightMobile}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={props.lcp ? "high" : "auto"}
        src={props.desktop}
        loading={props.lcp ? "eager" : "lazy"}
        preload={props.lcp}
        width={props.width}
        height={props.height}
      />
      <img
        class="object-cover w-full h-full"
        loading={props.lcp ? "eager" : "lazy"}
        src={props.desktop}
        alt={props.alt}
      />
    </Picture>
  );
}
