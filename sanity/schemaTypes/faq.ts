import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: [
        {title: 'Audit', value: 'Audit'},
        {title: 'Fiscalité', value: 'Fiscalité'},
        {title: 'Finance', value: 'Finance'},
        {title: 'Investisseurs étrangers', value: 'Investisseurs étrangers'},
        {title: 'Juridique', value: 'Juridique'},
        {title: 'Social', value: 'Social'},
        {title: 'Entreprises', value: 'Entreprises'},
      ],
    }),
    defineField({
      name: 'active',
      title: 'Afficher sur le site',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Mettre en avant',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'question', subtitle: 'category', media: 'category'}},
})
