import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

class PodcastRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="container is-max-desktop ">
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
              <article
                className={`column is-4 ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
                key={post.id}
              >
                <Link className="" to={post.fields.slug}>
                  <div className="card ">
                    <div className="card-content pb-2">
                      <div className="content">
                        <div className="field is-grouped mb-3">
                          <div className="control">
                            <span className="title has-text-weight-bold has-text-primary is-caps is-size-7">
                              Hit For Six
                            </span>
                          </div>

                          <div className="control">
                            <span className="subtitle is-caps is-size-7">
                              {post.frontmatter.date}
                            </span>
                          </div>
                          <div className="control">
                            <span className="tags has-addons">
                              <span className="tag is-episode-tag is-primary">
                                S{post.frontmatter.series}
                              </span>
                              <span className="tag is-episode-tag is-dark">
                                E{post.frontmatter.episode}
                              </span>
                            </span>
                          </div>
                        </div>
                        <h2 className="title is-size-4 my-0">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="play-circle"
                            className="mr-2 svg-inline--fa fa-play-circle fa-w-16 "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
                            ></path>
                          </svg>
                          {post.frontmatter.title}
                        </h2>
                      </div>
                    </div>
                    {post.frontmatter.featuredimage ? (
                      <div className="card-image py-2">
                        <figure className="image">
                          <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid}/>
                        </figure>
                      </div>
                    ) : null}
                    <div className="card-content pt-2">
                      <div className="content">
                        <p className="has-text-dark">{post.excerpt}</p>
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

PodcastRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PodcastRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "podcast" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "D MMM YYYY")
                series
                episode
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 264, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PodcastRoll data={data} count={count} />}
  />
);
