import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Informations générales du site',
  type: 'document',
  fields: [
    defineField({
      name: 'gymName',
      title: 'Nom de l’entreprise',
      type: 'string',
      initialValue: 'ZNAC',
    }),
    defineField({name: 'shortName', title: 'Nom court', type: 'string'}),
    defineField({name: 'tagline', title: 'Slogan', type: 'string'}),
    defineField({name: 'description', title: 'Description de l’entreprise', type: 'text', rows: 4}),
    defineField({name: 'shortDescription', title: 'Description courte', type: 'text', rows: 2}),
    defineField({name: 'foundedYear', title: 'Année de création', type: 'number'}),
    defineField({name: 'logo', title: 'Logo principal', type: 'image', options: {hotspot: true}}),
    defineField({name: 'phone', title: 'Téléphone', type: 'string'}),
    defineField({name: 'whatsapp', title: 'Numéro WhatsApp', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'address', title: 'Adresse', type: 'string'}),
    defineField({name: 'city', title: 'Ville', type: 'string'}),
    defineField({name: 'country', title: 'Pays', type: 'string'}),
    defineField({name: 'mapsUrl', title: 'Lien Google Maps', type: 'url'}),
    defineField({
      name: 'social',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'Facebook', type: 'url'}),
        defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
        defineField({name: 'youtube', title: 'YouTube', type: 'url'}),
        defineField({name: 'tiktok', title: 'TikTok', type: 'url'}),
        defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Informations du site'})},
})
