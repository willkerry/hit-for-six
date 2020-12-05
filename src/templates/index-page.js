import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  season,
}) => (
  <div>
    <section className="hero is-bold">
      <div className="hero-body">
        <div className="container is-max-desktop">
      <h4 className="subtitle is-4">{mainpitch.title}</h4>
      </div>
      </div>
    </section>
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-1">
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
                  <span className="tag is-primary">S{season}</span>
                  <span className="tag is-dark">E1</span>
                </div>
              </div>
            </div>

            <h1 className="title is-1">{title}</h1>

            <div className="content has-text-danger-light">{subheading}</div>
            


            <div className="field is-grouped ">
              <div className="control">
                <div className="tags">
                  <span className="tag ">00:55:16</span>
                </div>
              </div>
              <div className="control">
                <div className="tags">
                  <span className="tag">29 Nov 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <iframe
              title="Spotify"
              src="https://open.spotify.com/embed-podcast/show/3fuWZQQGODHOV2b81Df61D"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <Link className="button is-pulled-right" to="/products">
              <span>More episodes</span>
              <span className="icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-max-desktop">
        <div className="content">
          <div className="content">
            <div className="tile">
              <h1 className="title">{mainpitch.title}</h1>
            </div>
            <div className="tile">
              <h3 className="subtitle">{mainpitch.description}</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="button" to="/products">
                See all products
              </Link>
            </div>
          </div>
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              Latest stories
            </h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="button" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  season: PropTypes.number,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        season={frontmatter.season}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        season
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
