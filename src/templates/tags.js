import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div className="column is-full" key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-3">{post.node.frontmatter.title}</h2>
        </Link>
      </div>
    ))

    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged “${tag}”`

    return (
      <Layout>
        <SEO />
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container is-max-desktop ">
              <h2 className="title ">{tagHeader}</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />

          <div className="container is-max-desktop content">
            <div className="columns">{postLinks}</div>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
