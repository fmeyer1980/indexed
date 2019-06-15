const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/*.scss')]
    });
}

module.exports = {
  siteName: 'Profilmetal',
  siteDescription: 'A WordPress starter for Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/pages/**/*.md',
        typeName: 'Pages',
        remark: {
          // remark options
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    );
  },
  css: {
    split: true
  }
  
}


