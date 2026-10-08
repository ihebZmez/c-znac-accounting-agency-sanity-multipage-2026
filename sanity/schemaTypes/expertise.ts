import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'expertise',
  title: 'Expertise / domaine métier',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({name: 'icon', title: 'Icône', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'link', title: 'Lien', type: 'url'}),
    defineField({name: 'order', title: 'Ordre', type: 'number', initialValue: 0}),
    defineField({name: 'active', title: 'Actif', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'description', media: 'image'}},
})
