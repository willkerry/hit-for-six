import React from "react";
import Layout from "../components/Layout";
import RecentPodcastRoll from "../components/RecentPodcastRoll";

const NotFoundPage = () => (
  <Layout>

    <section class="hero is-primary is-bold is-medium">
      <div class="hero-body">
        <div class="container is-max-desktop">
          <h1 class="title">Error</h1>
          <h2 class="subtitle">This page has not been found.</h2>
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
