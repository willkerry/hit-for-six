import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
  featuredImage,
  author,
  ogImage,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {ogImage ? (
        <SEO title={title} description={description} article image={ogImage} />
      ) : (
        <SEO title={title} description={description} article />
      )}

      <header className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="columns is-vcentered">
              <div className="column is-9">
                <h1 className="title is-size-2">{title}</h1>
              </div>
            </div>
            {featuredImage ? (
              <figure className="image block">
                <GatsbyImage image={featuredImage} className="" imgStyle={{ 'border-radius': '4px' }} />
              </figure>
            ) : null}
            <div className="columns block">
              <div className="column is-9">
                <div className="subtitle">{description}</div>
              </div>
              <div className="column is-3">
                <div className="subtitle is-caps is-size-7 mb-2">{date}</div>
                <div className="subtitle is-size-6 mb-4">{author}</div>
                <div className="tags">
                  {tags.map((tag) => (
                    <Link
                      className="tag is-light"
                      key={tag + `tag`}
                      to={`/tags/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        {helmet || ''}
        <div className="container is-max-desktop content">
          <div className="columns">
            <div className="column is-9">
              <PostContent content={content} />
              {tags && tags.length ? <div className="mt-4"></div> : null}
            </div>
            <div className="column is-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
        ogImage={post.frontmatter.featuredimage.publicURL}
        author={post.frontmatter.author}
      />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`query BlogPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      date(formatString: "D MMM YYYY")
      title
      description
      tags
      author
      featuredimage {
        childImageSharp {
          gatsbyImageData(
            width: 960
            height: 442
            quality: 100
            transformOptions: {cropFocus: ENTROPY}
            layout: CONSTRAINED
          )
        }
        publicURL
      }
    }
  }
}
`
