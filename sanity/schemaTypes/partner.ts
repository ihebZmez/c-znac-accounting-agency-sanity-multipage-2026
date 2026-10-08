import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partenaire',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'website', title: 'Site web', type: 'url'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'category', title: 'Catégorie', type: 'string'}),
    defineField({name: 'order', title: 'Ordre', type: 'number', initialValue: 0}),
    defineField({name: 'active', title: 'Actif', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'category', media: 'logo'}},
})
