import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from 'components/organisms/Header';

const MainTemplate = ({ children, title }) => (
  <div>
    <Helmet title={title} />
    <Header />
    <div>{children}</div>
  </div>
);

MainTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
