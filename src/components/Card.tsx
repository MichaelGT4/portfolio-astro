import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: a;
  secHeading?: boolean;
}

type a = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Card({ href, frontmatter }: Props) {
  const { title, description, image, link } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="w-49% h-56 p-3 border flex-col border-gray-200 rounded-lg shadow dark:bg dark:border-gray-700">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h2 {...headerProps}>{title}</h2>
      </a>
      {/* <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex font-medium items-center text-blue-600 hover:underline"
      >
        See our guideline
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </li>

    // <li className="my-6 border-spacing-24">
    //   <a
    //     href={href}
    //     className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
    //   >
    //

    //   </a>
    //   <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
    //   <p>as: {description}</p>
    // </li>
  );
}
