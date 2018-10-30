import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <Container>
      <Row>
        {data.allStrapiArticle.edges.map(document => (
          <Col sm="6" md="4" key={document.node.id}>
            <div className="card">
              <h4>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h4>
              <h5>{document.node.subtitle}</h5>
              <Link className="btn btn-secondary" to={`/${document.node.id}`}>Read more</Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          subtitle
        }
      }
    }
  }
`
