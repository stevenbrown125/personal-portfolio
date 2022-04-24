export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Cannot be more than 255 Characters',
      type: 'string',
      validation: (Rule) =>
        Rule.max(255).warning(
          `An excerpt shouldn't be more than 255 characters.`
        ),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
  ],
};
