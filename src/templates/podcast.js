import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const PodcastTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  series,
  episode,
  helmet,
  spotifyURI,
  date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <div className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-1">
              <span className="is-size-6 has-text-weight-semibold has-text-danger-light is-caps">
                {date}
              </span>

              <h1 className="title is-2">{title}</h1>

              <p>{description}</p>
              <PostContent content={content} />
              <div className="tags has-addons mt-4">
                  <span className="tag is-primary">Series {series}</span>
                  <span className="tag is-dark">Episode {episode}</span>
                </div>
            </div>
            <div className="column is-6">
              <iframe
                src={`https://open.spotify.com/embed-podcast/episode/${spotifyURI
                  .split(/:/)
                  .pop()}`}
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        {helmet || ""}
        <div className="container is-max-desktop content">
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

PodcastTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Podcast = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PodcastTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        series={post.frontmatter.series}
        episode={post.frontmatter.episode}
        spotifyURI={post.frontmatter.spotifyURI}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Podcast">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Podcast.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Podcast;

export const pageQuery = graphql`
  query PodcastByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        templateKey
        date(formatString: "D MMMM YYYY")
        series
        episode
        spotifyURI
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
`;
