import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page (réutilisable)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'slug', title: 'Slug', type: 'slug', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Sous-titre', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
        defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
        defineField({name: 'ctaLabel', title: 'CTA', type: 'string'}),
        defineField({name: 'ctaLink', title: 'Lien CTA', type: 'url'}),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'enabled', title: 'Afficher', type: 'boolean', initialValue: true}),
            defineField({name: 'title', title: 'Titre', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'ctaLabel', title: 'CTA', type: 'string'}),
            defineField({name: 'ctaLink', title: 'Lien CTA', type: 'url'}),
            defineField({name: 'order', title: 'Ordre', type: 'number', initialValue: 0}),
          ],
        },
      ],
    }),
    defineField({name: 'seoTitle', title: 'Titre SEO', type: 'string'}),
    defineField({name: 'seoDescription', title: 'Description SEO', type: 'text', rows: 3}),
    defineField({name: 'ogImage', title: 'Image OG', type: 'image', options: {hotspot: true}}),
    defineField({name: 'active', title: 'Actif', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Titre', name: 'titleAsc', by: [{field: 'title', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'slug', media: 'hero.image'}},
})
