import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'white',
      borderBottom: '1px solid #333',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'rgb(0, 0, 88)',
            textDecoration: 'none',
          }}
        >
          [logo]
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
