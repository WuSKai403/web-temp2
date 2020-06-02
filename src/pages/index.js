import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
import SEO from"../components/seo";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Hero = styled(Jumbotron)`
  &&& {
    background-color: white;
  }  
`;

library.add(
  fab,
  faLink,
  faLayerGroup
);

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `herbert lin`, `javascript`, `react`, `python`, `data science`]}
        />
        <Hero className="px-0">
          <h1>Hi! I'm Herbert.</h1>
          <p>
            Previous front end developer.
            <br />
            Currently located in Taiwan, trying to transition into data-related stuff.
          </p>
          <Link to="/about/">
            <Button variant="primary">Learn more about me</Button>
          </Link>
        </Hero>
        <Row>
          <Col>
            <h2 className="mb-4">Recent work</h2>
          </Col>
        </Row>
        <Row>
          // 這裡之後會製作一個Component跟work一起共用
        </Row>
        <Portfolio limit={6} />
        <Row className="mt-4">
          <Col>
            <Link to="/work/">
              <Button variant="primary">View more</Button>
            </Link>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage

