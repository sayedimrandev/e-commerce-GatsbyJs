const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const templatePath = path.resolve(`./src/templates/BlogTemplate.jsx`)

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              path
              title
              date
              description
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: templatePath,
      path: node.frontmatter.path,
      context: {
        // slug: node.frontmatter.path,
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
