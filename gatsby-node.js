const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const Realization = path.resolve(`src/dynamicPages/realization.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              imagesDirectory
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: Realization,
      context: { imagesDirectory: node.frontmatter.imagesDirectory },
    })
  })
}
