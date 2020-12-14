import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
  featuredImage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <header className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="columns is-vcentered">
              <div className="column is-9">
                <h1 className="title is-size-2">{title}</h1>
              </div>
            </div>
            <figure className="image block">
              <Img
                className=""
                fluid={featuredImage}
                style={{ "border-radius": "0.25rem" }}
              />
            </figure>
            <div className="columns block is-vcentered">
              <div className="column is-9">
                <div className="subtitle">{description}</div>
              </div>

              
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        {helmet || ""}
        <div className="container is-max-desktop content">
          <div className="columns">
            <div className="column is-9">
              <PostContent content={content} />
              {tags && tags.length ? <div className="mt-4"></div> : null}
            </div>
            <div className="column is-3">
            <div className="subtitle is-caps is-size-7">{date}</div>
              <div className="tags">
                {tags.map((tag) => (
                  <Link
                    className="tag is-primary"
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
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredimage.childImageSharp.fluid}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "D MMM YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(
              maxWidth: 960
              maxHeight: 320
              cropFocus: ENTROPY
              quality: 100
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
