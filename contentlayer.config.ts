import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const ChangeLog = defineDocumentType(() => ({
  name: "ChangeLog",
  filePathPattern: "**/change-log/*.mdx",
  contentType: "mdx",
  fields: {
    date: {
      type: "string",
      required: true
    },
    release: {
      type: "string",
      required: true
    },
    title: {
      type: "string",
      required: true
    },
    authors: {
      type: "list",
      of: {
        type: "string",
      },
    }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ChangeLog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{type: "text", value: " "}];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            "data-mdx-heading": "",
          },
        },
      ],
    ],
  },
});