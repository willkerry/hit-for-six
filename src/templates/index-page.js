import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

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
}) => (
  <div>
    <section className="hero is-medium is-bold">
      <div className="hero-body">
          <div className="columns is-vcentered">            
          <div className="column is-4 is-offset-1">
              <h1 className="title">{title}e</h1>
              <h2 className="subtitle">{subheading}</h2>
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
              <Link className="button is-small" to="/products">
                <span>More episodes</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></span>
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
