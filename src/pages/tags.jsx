import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import setupTags from '../utils/setupTags';

const Tag = ({ data }) => {
  const tagsArray = data.allContentfulRecipe.nodes;
  const newTags = setupTags(tagsArray);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [tagName, tagValue] = tag;
            return (
              <Link key={index} to={`/${tagName}`} className="tag">
                <h5>{tagName}</h5>
                <p>
                  {tagValue} {tagValue > 1 ? `recipes` : 'recipe'}
                </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tag;
