import { Link } from 'gatsby';
import React from 'react';
import setupTags from '../utils/setupTags';

const TagList = ({ recipes = [] }) => {
  const newTags = setupTags(recipes);
  console.log(newTags);
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagName, tagValue] = tag;
          console.log(tagName);
          return (
            <Link key={index} to={`/${tagName}`}>
              {tagName} ({tagValue})
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TagList;
