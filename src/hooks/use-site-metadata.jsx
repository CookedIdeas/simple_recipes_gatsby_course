import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          title
          description
          linkedInUsername
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
