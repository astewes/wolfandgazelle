import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'

const IndexPage = ({ data }) => (
  <div>
    <Container>
      <Row>
        {data.allStrapiArticle.edges.map(document => (
          <Col sm="6" md="4" key={document.node.id}>
            <div className="card">
              <Link to={`/${document.node.id}`}>
                <time>{document.node.dateline.substr(0, 10)}</time>
                <div className="hexa">
                  <div className="hex1">
                    <div className="hex2">
                      <img src={`http://localhost:1337/${document.node.photo.url}`} alt="" width="220" height="213" />
                    </div>
                  </div>
                </div>
                <h4>{document.node.headline}</h4>
                <hr />
                <h5>{document.node.subtitle}</h5>
              </Link>
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
          headline
          dateline
          subtitle
          photo {
            id
            url
          }
          picture {
            id
            url
          }
        }
      }
    }
  }
`
