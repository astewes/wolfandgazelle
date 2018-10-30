import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'

const UserTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiUser.username}</h1>
    <Container>
      <Row>
        {data.strapiUser.articles.map(article => (
          <Col sm="6" md="4" key={article.id}>
            <div className="card">
              <h4>
                <Link to={`/${article.id}`}>{article.title}</Link>
              </h4>
              <h5>{article.subtitle}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
        subtitle
      }
    }
  }
`
