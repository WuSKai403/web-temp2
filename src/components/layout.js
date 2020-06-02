import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

//socialmedia
import SocialMedia from "./socialmedia";

const FooterWrapper = styled.footer`
  background-color: #171717;
  color: #f1f1f1;
  margin-top: 100px;
  padding: 50px 0;
`;

const EmailLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: #f1f1f1;
  &:hover, &:visited, &:active {
    color: #f1f1f1;
  }
`;


class Layout extends React.Component {
  render() {
    library.add(fab);
    const { children, title } = this.props;
    return (
     <React.Fragment>
      <Container>
        <Navbar className="mb-3 pl-0">
          <Navbar.Brand as={Link} to="/">E-DREaM</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/about">AboutUs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blog">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/work">Activities</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        {children}
      </Container>
        <FooterWrapper>
          <Container className="pt-6">
            <Row>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <h3>Herbert Lin</h3>
                <EmailLink href="mailto:herbert.lin.7@gmail.com">herbert.lin.7@gmail.com</EmailLink>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-end">
              <SocialMedia darkBackground={true} />

              </Col>
            </Row>
          </Container>
        </FooterWrapper>
     </React.Fragment>
    );
  }
}

export default Layout
