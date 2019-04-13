const defaultPlugins = ({ env }) => ({
  'postcss-easy-import': {
    extensions: '.pcss'
  },
  'postcss-preset-env': {
    stage: 2,
    features: {
      'custom-media-queries': true,
      'custom-properties': true,
      'custom-selectors': true
    }
  },
  'postcss-sassy-mixins': {},
  'postcss-nested': {},
  // Niceties
  'postcss-inline-svg': {
    path: 'src/svgs/'
  },
  'postcss-brand-colors': {},
  'postcss-property-lookup': {},
  'postcss-pxtorem': {},
  'postcss-will-change': {},
  'postcss-round-subpixels': {},
  'postcss-hexrgba': {},
  cssnano: env === 'production'
})

module.exports = ({ customConfig }) => {
  return ({ file, options, env }) => ({
    plugins: Object.assign({}, defaultPlugins({ env }), customConfig)
  })
}
