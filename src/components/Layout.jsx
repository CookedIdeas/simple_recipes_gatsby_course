import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';

import ThemeContext from '../context/ThemeContext';

import 'normalize.css';
import '../assets/css/main.css';

// const Layout = ({ children }) => (
//   // <StaticQuery
//   //   query={graphql`
//   //     query SiteTitleQuery {
//   //       site {
//   //         siteMetadata {
//   //           title
//   //         }
//   //       }
//   //     }
//   //   `}
//   // render={(data) => (
//     return (
//   <ThemeContext.Consumer>
//     {(theme) => (
//       <div className={theme.dark ? 'dark' : 'light'}>
//         <Navbar siteTitle={data.site.siteMetadata.title} />
//         {children}
//         <Footer />
//       </div>
//     )}
//   </ThemeContext.Consumer>
//     )

//   // )}
//   // />
// );

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {/* <Navbar />
      {children}
      <Footer /> */}
      {(theme) => (
        <div className={theme.dark ? 'dark' : 'light'}>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
