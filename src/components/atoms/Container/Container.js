import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
