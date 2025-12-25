export const blogSchema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    author: { type: 'string' },
    date: { type: 'string' },
    description: { type: 'string' },
    tags: { type: 'string' },
  },
  required: ['title', 'author', 'date'],
  additionalProperties: false,
};

export const tutorialSchema = {
  type: 'object',
  // more stuff
};
