import React from "react";
import Layout from "../components/Layout";
import ErrorLogo from "../components/error-logo";
import RecentPodcastRoll from "../components/RecentPodcastRoll";

import Link from "gatsby-link";

const NotFoundPage = () => (
  <Layout>
    <section class="hero is-primary is-bold is-medium">
      <div class="hero-body">
        <div class="container is-max-desktop">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <ErrorLogo height="3em" width="auto" />
              </div>
              <div className="level-item has-text-centered-touch">
                <div>
                  <h2 class="subtitle">This page has not been found. <Link style={{ textDecoration: "underline" }} to="/">Home</Link>.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-max-desktop">
        <RecentPodcastRoll />
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
