module.exports = {
  siteMetadata: {
    title: 'Santiago Torres - Full-Stack Developer',
    description: 'Santiago Torres Remote Full-Stack Web Developer Portfolio | Rails | React | GraphQL | GatsbyJS | Ruby | JavaScript | Python | Clojure | JamStack | NodeJS | Software | Design | Development | Engineering | Computer Science | Colombia',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.jsx'),
        },
      },
    },
  ],
};
