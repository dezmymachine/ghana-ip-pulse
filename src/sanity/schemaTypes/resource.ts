import { defineField, defineType } from "sanity";

export const resourceType = defineType({
  name: "resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
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
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Guide", value: "Guide" },
          { title: "Template", value: "Template" },
          { title: "FAQ", value: "FAQ" },
          { title: "Glossary", value: "Glossary" },
          { title: "External Link", value: "External Link" },
        ],
      },
    }),
    defineField({
      name: "file",
      type: "file",
    }),
    defineField({
      name: "externalUrl",
      type: "url",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
    },
    prepare(selection) {
      const { title, type } = selection;
      return { title, subtitle: type };
    },
  },
});
