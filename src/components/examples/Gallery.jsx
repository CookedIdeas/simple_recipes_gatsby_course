import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 200)
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <div>
      {nodes.map((img, index) => {
        const {
          name,
          childImageSharp: { gatsbyImageData },
        } = img;
        const pathToImage = getImage(img);
        return (
          <article key={index}>
            <p>Single image : {name}</p>
            <GatsbyImage image={pathToImage} alt={name} />
          </article>
        );
      })}
    </div>
  );
};
export default Gallery;
