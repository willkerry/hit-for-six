import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

export const AboutPageTemplate = ({
  title,
  description,
  introduction,
  cohostLeftName,
  cohostLeftBio,
  cohostLeftImage,
  cohostRightName,
  cohostRightBio,
  cohostRightImage,
}) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-max-desktop ">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle mt-4">{introduction}</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns">
            <div className="column is-6">
              <div class="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-96x96">
                        <Image
                          style={{ borderRadius: "100%" }}
                          fixed={cohostLeftImage}
                          loading="eager"
                          alt={"Photograph of " + cohostLeftName}
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{cohostLeftName}</p>
                      <p class="subtitle is-6"></p>
                    </div>
                  </div>

                  <div class="content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (cohostLeftBio = remark()
                          .use(recommended)
                          .use(remarkHtml)
                          .processSync(cohostLeftBio)
                          .toString()),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div class="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-96x96">
                        <Image
                          style={{ borderRadius: "100%" }}
                          fixed={cohostRightImage}
                          loading="eager"
                          alt={"Photograph of " + cohostRightName}
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{cohostRightName}</p>
                      <p class="subtitle is-6"></p>
                    </div>
                  </div>

                  <div class="content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: (cohostRightBio = remark()
                          .use(recommended)
                          .use(remarkHtml)
                          .processSync(cohostRightBio)
                          .toString()),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        introduction={post.frontmatter.introduction}
        description={post.frontmatter.description}
        cohostLeftName={post.frontmatter.cohostLeft.name}
        cohostLeftBio={post.frontmatter.cohostLeft.bio}
        cohostLeftImage={
          post.frontmatter.cohostLeft.image.childImageSharp.fixed
        }
        cohostRightName={post.frontmatter.cohostRight.name}
        cohostRightBio={post.frontmatter.cohostRight.bio}
        cohostRightImage={
          post.frontmatter.cohostRight.image.childImageSharp.fixed
        }
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        introduction
        description
        cohostLeft {
          name
          bio
          image {
            childImageSharp {
              fixed(width: 96, height: 96, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
        cohostRight {
          name
          bio
          image {
            childImageSharp {
              fixed(width: 96, height: 96, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
