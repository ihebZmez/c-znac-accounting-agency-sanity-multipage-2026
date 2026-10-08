import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Membre de l’équipe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'position', title: 'Poste', type: 'string'}),
    defineField({name: 'biography', title: 'Biographie', type: 'text', rows: 4}),
    defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
    defineField({name: 'email', title: 'Email', type: 'email'}),
    defineField({name: 'expertise', title: 'Expertises', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'order', title: 'Ordre', type: 'number', initialValue: 0}),
    defineField({name: 'active', title: 'Actif', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'position', media: 'photo'}},
})
