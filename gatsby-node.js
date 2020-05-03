const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const Realization = path.resolve(`src/dynamicPages/realization.js`);

  createPage({
    path: '/realizacje/arena-gliwice',
    component: Realization,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      title: 'Arena Gliwice',
      description: "Wykonaliśmy szereg prac w Arenie Gliwice..."
    },
  })
}
