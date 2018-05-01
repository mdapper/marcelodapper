import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Logo from 'components/icons/Logo';

const Header = () => (
  <Wrapper>
    <Container>
      <FlexWrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo size="64px" />
          </Link>
        </LogoWrapper>
        <nav>
          <Ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </Ul>
        </nav>
      </FlexWrapper>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  background-color: #514a9d;
  background: linear-gradient(90deg, #514a9d, #24c6dc);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const LogoWrapper = styled.div`
  flex: 1;

  a {
    display: block;
  }
`;

const Ul = styled.ul`
  display: flex;
`;

export default Header;
