import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialMedia from "../components/socialmedia";

const ActionTitle = styled.h4`
  margin-top: 18px;
  padding-bottom: 9px;
`;

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={[`blog`, `Herbert Lin`, `javascript`, `react`, `gatsby`]}
        />
        <Row>
          <Col className="profile">
            <h1>I'm Herbert Lin, a programmer who likes to dabble in different stuff.</h1>
            <ActionTitle>Email me</ActionTitle>
            <a href="mailto:herbert.lin.7@gmail.com">herbert.lin.7@gmail.com</a>
            <ActionTitle>Follow me</ActionTitle>
            <SocialMedia className="mt-5" />
          </Col>
          <Col>
            <p>Previously a front end developer at <a href="https://celinius.com.tw">Celinius</a>, I'm now looking to transition to a field related to data, as I believe that data is the furture.</p>
            <p>I'm also working at non-profit organization, <a href="https://www.xchange.com.tw">XChange</a>, whose purpose is to expand the influence of Taiwanese talents around the globe.</p>
            <p>Outside of being a programmer, I'm an avid language learner, an anime lover, and a gamer.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/s/likvy8592uf3orm/herbert_lin_resume.pdf?dl=0">
              <Button variant="secondary">Resume</Button>
            </a>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default AboutPage;
