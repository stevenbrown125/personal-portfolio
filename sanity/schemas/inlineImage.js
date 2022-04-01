export default {
  name: 'inlineImage',
  title: 'Inline Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'alt', type: 'string', title: 'Alternative Text' },
  ],
};
