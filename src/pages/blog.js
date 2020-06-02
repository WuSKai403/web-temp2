import React from "react";
import { Link, graphql } from "gatsby";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title //change title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Row className="mb-4">
          <Col>
            <h3>Blog</h3>
          </Col>
        </Row>
        {posts.map(({ node }) => {
           const title = node.frontmatter.title || node.fields.slug
           return (
             <Row key={node.fields.slug}>
               <Col>
                <h3>
                  <Link to={`blog${node.fields.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
               </Col>
             </Row>
           )
        })}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
