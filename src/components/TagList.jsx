import { Link } from 'gatsby';
import React from 'react';
import setupTags from '../utils/setupTags';
import slugify from 'slugify';

const TagList = ({ recipes = [] }) => {
  const newTags = setupTags(recipes);
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagName, tagValue] = tag;
          const slug = slugify(tagName, { lower: true });
          return (
            <Link key={index} to={`/tags/${slug}`}>
              {tagName} ({tagValue})
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TagList;
