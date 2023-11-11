import Link from "next/link";
import {useMDXComponent} from "next-contentlayer/hooks";
import {cn} from "@/lib/utils";
import {JSX} from "react";

const CustomLink = (props: any): JSX.Element => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  h2: (props: any) => (
    <h2 className="text-2xl underline-offset-4 hover:underline" {...props} />
  ),
  a: (props: any) => (
    <CustomLink
      className="font-medium text-gray-500 underline-offset-4 hover:text-black"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      {...props}
    />
  ),
  thead: (props: any) => <thead className="text-lg" {...props} />,
  Note: (props: any) => (
    <div
      className={cn(
        "mt-4 rounded-md border-l-4 border-gray-500 bg-gray-100 px-4 py-1 text-[0.95rem] leading-[1.4rem]",
        {
          "border-yellow-500 bg-yellow-100": props.variant === "warning",
          "border-blue-500 bg-blue-100": props.variant === "info",
          "border-green-500 bg-green-100": props.variant === "success",
        },
      )}
      {...props}
    />
  ),
};

interface MDXProps {
  code: string;
  images?: { alt: string; src: string; blurDataURL: string }[];
  tweets?: any[];
  className?: string;
}

export function MDX({code, images, className}: MDXProps) {
  const Component = useMDXComponent(code);

  // const MDXImage = (props: any): null | JSX.Element => {
  //   if (!images) return null;
  //   const blurDataURL = images.find((image): boolean => image.src === props.src)
  //     ?.blurDataURL;
  //
  //   return <ZoomImage {...props} blurDataURL={blurDataURL} />;
  // };

  return (
    <article
      data-mdx-container
      className={cn(
        "prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold",
        className,
      )}
    >
      <Component
        components={{
          ...components,
          // Image: MDXImage,
        }}
      />
    </article>
  );
}