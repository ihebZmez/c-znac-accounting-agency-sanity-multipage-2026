import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'slug', title: 'Slug', type: 'slug', validation: (Rule) => Rule.required()}),
    defineField({name: 'shortDescription', title: 'Description courte', type: 'text', rows: 3}),
    defineField({name: 'description', title: 'Description complète', type: 'text', rows: 6}),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Nom d’icône Lucide ou emoji',
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de section',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          'Finance & Audit',
          'Conseil fiscal',
          'Conseil juridique',
          'Conseil social & RH',
          'Investissement international',
          'Conseil stratégique',
          'Accompagnement des entreprises',
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'benefits', title: 'Bénéfices', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'ctaLabel', title: 'Texte du CTA', type: 'string'}),
    defineField({name: 'ctaLink', title: 'Lien du CTA', type: 'url'}),
    defineField({name: 'order', title: 'Ordre d’affichage', type: 'number', initialValue: 0}),
    defineField({
      name: 'active',
      title: 'Afficher sur le site',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'category', media: 'coverImage'}},
})
