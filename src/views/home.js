import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Steel Lined Walrus</title>
        <meta property="og:title" content="Steel Lined Walrus" />
      </Helmet>
      <a
        href="https://soloreadit.com/short/81472?stream_uuid=d3dd6779-8c54-49a6-b9c1-72af3c141676&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/bg_butt-300w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
