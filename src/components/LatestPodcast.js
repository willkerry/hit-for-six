import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class LatestPodcast extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="container mx-1">
                <div className="columns is-vcentered">
                  <div className="column  is-4 is-offset-1">
                    <Link to={post.fields.slug}>
                      <div className="field is-grouped is-grouped-multiline">
                        <div className="control">
                          <div className="">
                            <span className="is-size-6 has-text-weight-semibold has-text-danger-light is-caps">
                              Latest Episode
                            </span>
                          </div>
                        </div>
                        <div className="control">
                          <div className="tags has-addons">
                            <span className="tag is-primary">
                              S{post.frontmatter.series}
                            </span>
                            <span className="tag is-dark">
                              E{post.frontmatter.episode}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h1 className="title is-1">{post.frontmatter.title}</h1>

                      <div className="content has-text-danger-light">
                        {post.excerpt}
                      </div>

                      <div className="field is-grouped">
                        <div className="control">
                          <div className="tags">
                            <span className="tag is-dark">
                              {post.frontmatter.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-6">
                    <iframe
                      title="Latest episode player from Spotify"
                      src={`https://open.spotify.com/embed-podcast/episode/${post.frontmatter.spotifyURI
                        .split(/:/)
                        .pop()}`}
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>

                    <div className="field is-grouped is-pulled-right">
                      <div className="control">
                        <Link className="button is-primary" to="/podcast">
                          <span>More episodes</span>
                          <span className="icon">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

LatestPodcast.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query LatestPodcastQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "podcast" } } }
          sort: { order: DESC, fields: frontmatter___date }
          limit: 1
        ) {
          edges {
            node {
              excerpt(pruneLength: 500)
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(fromNow: true)
                series
                episode
                spotifyURI
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LatestPodcast data={data} count={count} />}
  />
);
