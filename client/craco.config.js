const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@Components': './src/components',
          '@Constants': './src/constants',
          '@Helpers': './src/helpers',
          '@Pages': './src/pages',
          '@RcQuery': './src/rc-query',
          '@Routes': './src/routes',
          '@Services': './src/services',
          '@Styles': './src/styles',
          '@App': './src/app',
          // you can alias packages too
          //   '@material-ui': './node_modules/@material-ui-ie10',
        },
      },
    },
  ],
};
