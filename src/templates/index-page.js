import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import PodcastRoll from "../components/PodcastRoll";

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
          <div className="column  is-4 is-offset-1">
            <Link to="#">
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
                    <span className="tag is-dark">00:55:16</span>
                  </div>
                </div>
                <div className="control">
                  <div className="tags">
                    <span className="tag is-dark">29 Nov 2020</span>
                  </div>
                </div>
              </div>
            </Link>
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

            <div className="field is-grouped is-pulled-right">
              <div className="control">
                <Link className="button is-primary" to="/products">
                  <span>More episodes</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Link>
              </div>

              <div className="control">
                <Link className="button is-primary" to="/products">
                  <span>More play options</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-max-desktop">
        <div className="columns">
          <div className="column is-4 ">
            <Link to="#">
              <div className="field is-grouped mb-3">
                <div className="control">
                  <span className="title  has-text-primary is-caps is-size-7">
                    Hit For Six
                  </span>
                </div>

                <div className="control">
                  <span className="subtitle is-caps is-size-7 mb-2">
                    24 Sep 2020
                  </span>
                </div>
                <div className="control">
                  <span className="tags has-addons">
                    <span className="tag is-episode-tag is-primary">S1</span>
                    <span className="tag is-episode-tag is-dark">E21</span>
                  </span>
                </div>
              </div>
              <div className="title is-size-4 mb-4">
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
                Reflections on a unique summer of cricket
              </div>
            </Link>
            <div className="">
              <Link to="#">
                <p className="has-text-dark">
                  It certainly wasn’t the summer we were expecting but, despite
                  the Coronavirus pandemic, it’s been a fine summer of cricket
                  to reflect back on! In this penultimate episode of the season,
                  Rob and Michael pick over England’s disappointing series
                  defeat to Australia before discussing their player and moment
                  of the summer, and briefly previewing the Bob Willis Trophy
                  Final between Somerset and Essex.
                </p>
              </Link>
            </div>
          </div>
          <div className="column is-4 ">
            <Link to="#">
              <div className="field is-grouped mb-3">
                <div className="control">
                  <span className="title  has-text-primary is-caps is-size-7">
                    Hit For Six
                  </span>
                </div>

                <div className="control">
                  <span className="subtitle is-caps is-size-7 mb-2">
                    13 Sep 2020
                  </span>
                </div>
                <div className="control">
                  <span className="tags has-addons">
                    <span className="tag is-episode-tag is-primary">S1</span>
                    <span className="tag is-episode-tag is-dark">E20</span>
                  </span>
                </div>
              </div>
              <div className="title is-size-4 mb-4">
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
                England’s Golden Era for ODIs and T20s
              </div>
            </Link>
            <div className="">
              <Link to="#">
                <p className="has-text-dark">
                  Following a highly entertaining series victory over Australia
                  in the T20s and with the ODI series in full swing, Michael and
                  Rob spent Saturday morning reviewing England's white ball
                  success. From the outstanding form of David Malan to who
                  should be picked for the T20 World Cup next year, and of
                  course how good Adil Rashid really is, the pair cover the
                  major talking points coming out of the limited-overs Summer!
                </p>
              </Link>
            </div>
          </div>
          <div className="column is-4 ">
            <Link to="#">
              <div className="field is-grouped mb-3">
                <div className="control">
                  <span className="title  has-text-primary is-caps is-size-7">
                    Hit For Six
                  </span>
                </div>

                <div className="control">
                  <span className="subtitle is-caps is-size-7 mb-2">
                    24 Aug 2020
                  </span>
                </div>
                <div className="control">
                  <span className="tags has-addons">
                    <span className="tag is-episode-tag is-primary">S1</span>
                    <span className="tag is-episode-tag is-dark">E19</span>
                  </span>
                </div>
              </div>
              <div className="title is-size-4 mb-4">
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
                Our (Alternative) England XI (2000-2020)
              </div>
            </Link>
            <div className="content has-text-dark">
              <Link to="#">
                <p className="has-text-dark">
                  Earlier this year, Rob and Michael selected their England Test
                  XI of the 21st century. A team full of some of the biggest and
                  best names English cricket has ever produced. But what about
                  some of those lesser known and quickly forgotten players?
                  Those one test wonders and stop-gap selections?
                </p>
                <p className="has-text-dark">
                  Joined by Nick Harris and Linus Pardoe, Rob and Michael go
                  about selecting an alternative England XI made up of rogue
                  characters, last-minute fill-ins, and statistical failures.
                  The result is a side so unbalanced, it would be fitting of any
                  England selectors meeting!
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Link className="button is-pulled-right" to="/products">
          <span>More episodes</span>
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
