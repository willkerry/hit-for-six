import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

export const query = graphql`
  query latestEpisode {
    podcastRssFeedEpisode {
      item {
        enclosure {
          url
          length
          type
        }
        itunes {
          summary
          episode
        }
        title
        isoDate(formatString: "D MMM YYYY", locale: "")
        guid
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <p className="is-caps is-size-7">
      {data.podcastRssFeedEpisode.item.isoDate}
    </p>
    <h1 className="title">{data.podcastRssFeedEpisode.item.title}</h1>
    <p>{data.podcastRssFeedEpisode.item.itunes.summary}</p>
    <audio src="" />
    <figure>
      <audio
        controls
        src={data.podcastRssFeedEpisode.item.enclosure.url}
        preload="none"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </Layout>
);
export default IndexPage;
