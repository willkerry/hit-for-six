import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import RecentPodcastRoll from "../components/RecentPodcastRoll";
import LatestPodcast from "../components/LatestPodcast";
import RecentBlogRoll from "../components/RecentBlogRoll";
import SEO from "../components/seo";

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
    <SEO />
    <section className="hero is-bold">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <h4 className="subtitle is-4">{mainpitch.title}</h4>
        </div>
      </div>
    </section>
    <LatestPodcast />

    <section className="section">
      <div className="container is-max-desktop">
        <RecentPodcastRoll />
        <div classname="block">
          <Link className="button is-pulled-right" to="/podcast">
            <span>More episodes</span>
            <span className="icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-max-desktop block">
        <h2 className="title is-3">Recent blog posts</h2>
      </div>
      <div className="block">
        <RecentBlogRoll />
      </div>
      <div className="container is-max-desktop block">
        <Link className="button is-pulled-right" to="/blog">
          <span>More posts</span>
          <span className="icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
