import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="container is-max-desktop ">
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <article className="column is-4" key={post.id}>
                <Link className="" to={post.fields.slug}>
                  <div className="card ">
                    {post.frontmatter.featuredimage ? (
                      <div className="card-image">
                        <figure className="image">
                          <GatsbyImage
                            image={
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData
                            }
                          />
                        </figure>
                      </div>
                    ) : null}
                    <div className="card-content pb-2">
                      <div className="content">
                        <h2 className="title is-size-4 my-0 has-text-weight-bold">
                          {post.frontmatter.title}
                        </h2>
                      </div>
                    </div>

                    <div className="card-content pt-2">
                      <div className="content">
                        <p className="has-text-dark">{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="card-content pt-0 pb-3">
                      <div className="field is-grouped mb-3">
                        <div className="control">
                          <span className="subtitle is-caps is-size-7">
                            {post.frontmatter.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "D MMM YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(width: 304, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
