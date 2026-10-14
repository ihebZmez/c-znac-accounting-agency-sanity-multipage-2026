import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Actualités',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
    }),
    defineField({name: 'category', title: 'Catégorie', type: 'string'}),
    defineField({name: 'date', title: 'Date', type: 'date'}),
    defineField({name: 'link', title: 'Lien vers le contenu', type: 'url'}),
    defineField({name: 'featured', title: 'Mettre en avant', type: 'boolean', initialValue: false}),
    defineField({name: 'order', title: 'Ordre d’affichage', type: 'number', initialValue: 0}),
    defineField({
      name: 'image',
      title: 'Image / Affiche',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'Afficher sur le site ?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Plus récentes',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image'},
  },
})
