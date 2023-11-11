// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var ChangeLog = defineDocumentType(() => ({
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
        type: "string"
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
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
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            "data-mdx-heading": ""
          }
        }
      ]
    ]
  }
});
export {
  ChangeLog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DCP5KNEV.mjs.map
