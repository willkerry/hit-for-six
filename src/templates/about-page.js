import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <SEO />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-max-desktop ">
            <h2 className="title ">{title}</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-max-desktop mt-6">
          <h2 className="subtitle is-4">
            We hugely enjoyed hosting Hit for Six in radio format while at
            University and when Covid-19 and lockdown hit, it only made sense to
            bring back the show as a podcast! It has kept us going during this
            tricky period and we has been great to get to speak about the game
            we both love with each other and some interesting guests. Thank you
            for listening!
          </h2>

          <div className="columns">
            <div className="column is-6">
              <div className="columns is-multiline">
                <div className="column is-6">
                  <img src="../img/michael-photo.jpeg" />
                </div>
                <div className="column is-6">
                  <h3 className="title is-4">Michael</h3>
                </div>
                <div className="column content is-12">
                  <p>
                    An unashamed 2005 Ashes cliche cricket fan. Michael fell
                    hard for the game as an 11 year old, watching Michael
                    Vaughan's merry-men defeat the legendary Australia side in
                    what he will defend to the death as the greatest series of
                    all time. Unfortunately, this was slightly too late in life
                    for him to get any good at the actual sport itself.
                  </p>
                  <p>
                    A self-taught, googlies only bowler, career highlights have
                    included under-15 B team player of the year and one-time
                    figures of: 0.3 overs, 0 runs, 3 wickets. In addition to
                    these heady heights as a player; as a fan Michael has
                    devoured cricket in any form, through books, television,
                    live matches, radio and now podcasts!
                  </p>
                  <p>
                    Now living within 15 minutes walk of the Oval and working as
                    a Policy Officer in local government, the best thing about
                    Hit for Six for Michael is being able to talk about his
                    favourite sport as much as he wants without fear of boring
                    anyone!
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="columns is-multiline">
                <div className="column is-6">
                  <img src="../img/rob-photo.jpg" />
                </div>
                <div className="column is-6">
                  <h3>Rob</h3>
                </div>
                <div className="column content is-12">
                  <p>
                    “Cricket, rugby, football.” Some say those were Rob’s first
                    words as a toddler. Whether that’s true or not, one thing’s
                    for sure - Rob was a sports lover from day one. And while he
                    loved all sport, cricket was always his favourite.{" "}
                  </p>
                  <p>
                    Born and raised in South West London to a father who was
                    both an MCC and Surrey member - trips to Lord’s and the Oval
                    became de rigueur each summer and from there his love for
                    the sport simply grew and grew. Dreams of becoming a
                    professional cricketer faded quickly as a young teen (the
                    closest he ever got was getting England opener Dom Sibley
                    out in an Under 11s game), but his love for the game
                    remained unfettered.
                  </p>
                  <p>
                    The kind of bowler that only England could produce at 6 ft 4
                    but with no pace and little menace - career highlights have
                    included winning promotion ahead of the 1st XI while
                    University of Warwick Men’s 2nd XI captain and scraping
                    through his probation as an MCC playing member. Now married,
                    he lives with his wife and cat, and works for an insuretech
                    start-up in London.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`;
