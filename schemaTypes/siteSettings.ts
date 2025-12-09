import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'header',
      title: 'Header',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      group: 'header',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      group: 'header',
      of: [
        {
          title: 'item',
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
