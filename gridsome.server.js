module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allPages {
          edges {
            node {
              id
              path
              templateKey
            }
          }
        }
      }
    `)

    data.allPages.edges.forEach(({ node }) => {
      createPage({
        path: `${node.path}`,
        component: `./src/templates/${node.templateKey}.vue`,
        context: {
          id: node.id
        }
      })
    })
  })
}