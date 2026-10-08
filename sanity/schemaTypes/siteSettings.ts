import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'SITE SETTINGS — agence professionnelle',
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
    defineField({name: 'darkLogo', title: 'Logo sombre', type: 'image', options: {hotspot: true}}),
    defineField({name: 'favicon', title: 'Favicon', type: 'image'}),
    defineField({
      name: 'brandColors',
      title: 'Couleurs de la marque',
      type: 'object',
      fields: [
        defineField({name: 'primary', title: 'Couleur principale', type: 'string'}),
        defineField({name: 'secondary', title: 'Couleur secondaire', type: 'string'}),
        defineField({name: 'accent', title: 'Couleur d’accentuation', type: 'string'}),
      ],
    }),
    defineField({
      name: 'typography',
      title: 'Typographie',
      type: 'object',
      fields: [
        defineField({name: 'fontFamily', title: 'Police', type: 'string'}),
        defineField({name: 'headingWeight', title: 'Poids des titres', type: 'number'}),
      ],
    }),
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
    defineField({
      name: 'hours',
      title: 'Horaires',
      type: 'object',
      fields: [
        defineField({name: 'weekday', title: 'Lun–Ven', type: 'string'}),
        defineField({name: 'saturday', title: 'Samedi', type: 'string'}),
        defineField({name: 'sunday', title: 'Dimanche', type: 'string'}),
      ],
    }),
    defineField({
      name: 'header',
      title: 'En-tête',
      type: 'object',
      fields: [
        defineField({
          name: 'navigation',
          title: 'Navigation',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Étiquette', type: 'string'}),
                defineField({name: 'link', title: 'Lien', type: 'url'}),
              ],
            },
          ],
        }),
        defineField({name: 'ctaText', title: 'Texte du CTA', type: 'string'}),
        defineField({name: 'ctaLink', title: 'Lien du CTA', type: 'url'}),
        defineField({name: 'announcement', title: 'Annonce', type: 'string'}),
        defineField({name: 'language', title: 'Langues', type: 'array', of: [{type: 'string'}]}),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Pied de page',
      type: 'object',
      fields: [
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'ctaText', title: 'CTA', type: 'string'}),
        defineField({name: 'ctaLink', title: 'Lien CTA', type: 'url'}),
        defineField({
          name: 'columns',
          title: 'Colonnes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Titre', type: 'string'}),
                defineField({
                  name: 'links',
                  title: 'Liens',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({name: 'label', title: 'Étiquette', type: 'string'}),
                        defineField({name: 'link', title: 'Lien', type: 'url'}),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'legalLinks',
          title: 'Liens juridiques',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Étiquette', type: 'string'}),
                defineField({name: 'link', title: 'Lien', type: 'url'}),
              ],
            },
          ],
        }),
        defineField({name: 'copyright', title: 'Droit d’auteur', type: 'string'}),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO global',
      type: 'object',
      fields: [
        defineField({name: 'defaultTitle', title: 'Titre par défaut', type: 'string'}),
        defineField({
          name: 'defaultDescription',
          title: 'Description par défaut',
          type: 'text',
          rows: 3,
        }),
        defineField({name: 'ogImage', title: 'Image OG', type: 'image', options: {hotspot: true}}),
        defineField({name: 'siteUrl', title: 'URL du site', type: 'url'}),
        defineField({name: 'twitterCard', title: 'Carte Twitter/X', type: 'string'}),
        defineField({name: 'robots', title: 'Configuration robots', type: 'text', rows: 2}),
      ],
    }),
    defineField({
      name: 'homepage',
      title: 'Sections de la page d’accueil',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'key', title: 'Clé', type: 'string'}),
            defineField({name: 'enabled', title: 'Afficher', type: 'boolean', initialValue: true}),
            defineField({name: 'eyebrow', title: 'Sous-titre', type: 'string'}),
            defineField({name: 'title', title: 'Titre', type: 'string'}),
            defineField({name: 'highlight', title: 'Texte mis en avant', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'ctaLabel', title: 'CTA', type: 'string'}),
            defineField({name: 'ctaLink', title: 'Lien CTA', type: 'url'}),
            defineField({name: 'order', title: 'Ordre', type: 'number', initialValue: 0}),
          ],
        },
      ],
    }),
    defineField({
      name: 'homepageContent',
      title: 'Contenu de la page d’accueil',
      type: 'object',
      fields: [
        defineField({
          name: 'videoIntroduction',
          title: 'Introduction vidéo',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Afficher la section',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({name: 'title', title: 'Titre', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
            defineField({name: 'video', title: 'Vidéo téléchargée', type: 'file'}),
            defineField({
              name: 'poster',
              title: 'Affiche vidéo',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'externalUrl',
              title: 'Lien vidéo externe (YouTube ou Vimeo)',
              type: 'url',
            }),
            defineField({name: 'ctaLabel', title: 'Texte du CTA', type: 'string'}),
            defineField({name: 'ctaLink', title: 'Lien du CTA', type: 'url'}),
          ],
        }),
        defineField({
          name: 'community',
          title: 'Communauté en ligne',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Afficher la section',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({name: 'title', title: 'Titre de la section', type: 'string'}),
            defineField({
              name: 'description',
              title: 'Description de la section',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'selectedPosts',
              title: 'Articles sélectionnés',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'news'}],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'faq',
          title: 'FAQ',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Afficher la section',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({name: 'title', title: 'Titre de la section', type: 'string'}),
            defineField({
              name: 'description',
              title: 'Description de la section',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'selectedFaqs',
              title: 'Questions sélectionnées',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'faq'}],
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({name: 'heroPoster', title: 'Image Hero (fallback)', type: 'image'}),
  ],
  preview: {prepare: () => ({title: 'Paramètres du site'})},
})
