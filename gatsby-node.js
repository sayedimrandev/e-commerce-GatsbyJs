const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allBlogpostsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allBlogpostsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: require.resolve("./src/templates/BlogTemplate.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/products/*"

    createPage(page)
  }
}
