import React from 'react';
import Layout from '../components/layout';
import RecipesList from '../components/RecipesList';
import { graphql } from 'gatsby';
import { Seo } from '../components/seo';

const Contact = ({ data }) => {
  const featuredRecipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch ?</h3>
            <p>
              Semiotics farm-to-table ethical organic letterpress cray tousled
              austin la croix keytar art party normcore banjo you probabl
              haven't heard of them quinoa. Before they sold out snackwave yr
              tonx solarpunk stumptown XOXO chicharrones literally cardigan palo
              santo cred hexagon. Cliche quinoa tattooed hoodie mukbang.
              Asymmetrical glossier slow-carb craft beer succulents solarpunk
              plaid cold-pressed celiac shaman. JOMO vegan gluten-free raclette
              tofu la croix snackwave cupping forage taxidermy echo park.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/meqwvqkn"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" />
              </div>
              <button className="btn block">Send</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this magnificent foooood !!!</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: BLURRED, width: 200, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Contact;

export const Head = () => <Seo title="Contact Page" />;
