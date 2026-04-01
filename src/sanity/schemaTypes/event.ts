import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
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
      name: "date",
      type: "datetime",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Webinar", value: "Webinar" },
          { title: "Workshop", value: "Workshop" },
          { title: "University Talk", value: "University Talk" },
          { title: "Corporate Training", value: "Corporate Training" },
        ],
      },
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "registrationLink",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare(selection) {
      const { title, date } = selection;
      return { 
        title, 
        subtitle: date ? new Date(date).toLocaleDateString() : undefined 
      };
    },
  },
});
