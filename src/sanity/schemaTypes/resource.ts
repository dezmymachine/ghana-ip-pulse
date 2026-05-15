import { defineField, defineType } from "sanity";

export const resourceType = defineType({
  name: "resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "resourceType",
      type: "string",
      title: "Resource Type",
      options: {
        list: [
          { title: "Paper", value: "Paper" },
          { title: "Guide", value: "Guide" },
          { title: "Template", value: "Template" },
          { title: "FAQ", value: "FAQ" },
          { title: "Glossary", value: "Glossary" },
          { title: "External Link", value: "External Link" },
        ],
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "coAuthors",
      type: "array",
      of: [{ type: "string" }],
      title: "Co-Authors",
    }),
    defineField({
      name: "affiliation",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Abstract or summary of the resource",
    }),
    defineField({
      name: "source",
      type: "string",
      description: "Publication or source info (e.g. 'KNUST LJ Vol 12, 2025')",
    }),
    defineField({
      name: "pages",
      type: "string",
      description: "Page count or page range (e.g. '18 Pages')",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published Date",
    }),
    defineField({
      name: "dateWritten",
      type: "date",
      title: "Date Written",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "file",
      type: "file",
    }),
    defineField({
      name: "externalUrl",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      resourceType: "resourceType",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, resourceType, author } = selection;
      return {
        title,
        subtitle: [resourceType, author].filter(Boolean).join(" · "),
      };
    },
  },
});
