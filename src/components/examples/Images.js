import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained default</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-1.jpeg"
          alt="food"
        />
        <h4>height</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          height={400}
        />
        <h4>placeholder</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="traceSVG"
          layout="constrained"
        />
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Images;
