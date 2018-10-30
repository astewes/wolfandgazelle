import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap'
import '../styles/article.scss'

const ArticleTemplate = ({ data }) => (
  <div>
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 2 }}
          md={{ size: 6, offset: 3 }}>
          <h1>{data.strapiArticle.headline}</h1>
          <p>by <Link to={`/authors/${data.strapiArticle.byline.id}`}>{data.strapiArticle.byline.username}</Link></p>
        </Col>
        <Col sm={{ size: 8, offset: 2 }}
          md={{ size: 6, offset: 3 }}>
          <p className="copy">{data.strapiArticle.copy}</p>
        </Col>
      </Row>

      {data.strapiArticle.picture.map(picture => (
        <div className="hexa" key={picture.id}>
          <div className="hex1">
            <div className="hex2">
              <img src={`http://localhost:1337/${picture.url}`} alt="" width="220" height="213" />
            </div>
          </div>
        </div>
      ))}
    </Container>
  </div>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      headline
      copy
      byline {
        id
        username
      }
      picture {
        id
        url
      }
    }
  }
`
