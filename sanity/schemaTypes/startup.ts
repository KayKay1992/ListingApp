import { defineType } from "sanity"

export default defineType({
  name: "startup",
  title: "Startup",
  type: "document",

  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      type: "reference",
      to: {
        type: "author",
      },
    },
    {
      name: "views",
      type: "number",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "category",
      type: "string",
      validation: (Rule: any) =>
        Rule.min(1).max(20).required().error("please enter a category"),
    },
    {
      name: "image",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "pitch",
      type: "markdown",
    },
  ],
  
});
