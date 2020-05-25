const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const Realization = path.resolve(`src/dynamicPages/realization.js`)

  const inProgressRealization = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/in-progress/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              imagesDirectory
              slug
            }
          }
        }
      }
    }
  `)

  const doneRealization = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/done/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              imagesDirectory
              slug
            }
          }
        }
      }
    }
  `)

  if (inProgressRealization.errors || doneRealization.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  inProgressRealization.data.allMarkdownRemark.edges.forEach(
    async ({ node }) => {
      createPage({
        path: `/realizacje/w-trakcie/${node.frontmatter.path}`,
        component: Realization,
        context: {
          imagesDirectory: node.frontmatter.imagesDirectory,
          slug: node.frontmatter.slug,
        },
      })
    }
  )
  doneRealization.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    createPage({
      path: `/realizacje/ukonczone/${node.frontmatter.path}`,
      component: Realization,
      context: {
        imagesDirectory: node.frontmatter.imagesDirectory,
        slug: node.frontmatter.slug,
      },
    })
  })
}
