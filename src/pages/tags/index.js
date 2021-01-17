import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-max-desktop ">
            <h2 className="title ">All blog tags</h2>
          </div>
        </div>
      </section>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container is-max-desktop">
        <div className="columns is-multiline">
          {group.map((tag) => (
            <div className="column" key={tag.fieldValue}>
              <Link className="box" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <span className="tag is-medium">{tag.fieldValue}</span> <span className="tag is-medium is-primary is-rounded">{tag.totalCount}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
