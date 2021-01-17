import React from "react";

import SEO from "../../components/seo";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Logo from "../../components/logo";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container is-max-desktop">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <Logo height="5em" width="auto" />
                  </div>
                  <div className="level-item has-text-centered-touch">
                    <h1 className="title">The Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
