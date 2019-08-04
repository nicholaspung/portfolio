// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import ProjectFeed from '../components/ProjectFeed/ProjectFeed';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <ProjectFeed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
