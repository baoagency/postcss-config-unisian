const defaultPlugins = ({ env }) => ({
  'postcss-easy-import': {
    extensions: '.pcss',
  },
  'postcss-preset-env': {
    stage: 2,
    features: {
      'case-insensitive-attributes': false,
      'custom-media-queries': true,
      'custom-properties': false,
      'nesting-rules': true,
    },
  },
  // Niceties
  'postcss-brand-colors': {},
  'postcss-property-lookup': {},
  cssnano: env === 'production'
    ? {
      preset: [
        'default',
        {
          mergeLonghand: false,
        },
      ],
    }
    : false,
})

module.exports = ({ customConfig }) => {
  return ({ file, options, env }) => ({
    plugins: Object.assign({}, defaultPlugins({ env }), customConfig({ env })),
  })
}
