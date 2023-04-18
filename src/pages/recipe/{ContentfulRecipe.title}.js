import React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';
import slugify from 'slugify';
import { Seo } from '../../components/seo';

const RecipeTemplate = ({ data }) => {
  const { title, prepTime, cookTime, content, servings, description, image } =
    data.contentfulRecipe;
  const { tags, ingredients, instructions, tools } = content;
  const pathToImage = getImage(image);
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep. Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :{' '}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });
                  return (
                    <Link key={index} to={`/tags/${slug}`}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

// gatsby automatically make the query with the id found in props params
// because it has the same name ($id === id)
export const query = graphql`
  query getSingleRecipe($id: String) {
    contentfulRecipe(id: { eq: $id }) {
      id
      title
      prepTime
      cookTime
      content {
        tags
        ingredients
        instructions
        tools
      }
      servings
      description
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;

export const Head = ({ data }) => (
  <Seo
    title={data.contentfulRecipe.title}
    description={data.contentfulRecipe.description}
  />
);

// ======== SIDE NOTE ======== //

// file {ContentFulRecipe.title}.js makes this query :
//
// query MyQuery {
//   allContentfulRecipe {
//     nodes {
//       title
//     }
//   }
// }
//
// to create one page by title !!!
