import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import AllRecipes from '../components/AllRecipes';
import { Seo } from '../components/seo';

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            layout="constrained"
            placeholder="blurred"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
