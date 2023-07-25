import React from 'react'

import { Helmet } from 'react-helmet'

import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>Homepage - exported project</title>
        <meta property="og:title" content="Homepage - exported project" />
      </Helmet>
      <div className="homepage-homepageinit">
        <img
          alt="Rectangle93button1492"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9dad47ef-56ed-4ffa-856c-2baa51972a20/b5a8db33-88cc-46c7-b5ba-ee56820e548e?org_if_sml=11190"
          className="homepage-rectangle93button"
        />
        <span className="homepage-text">
          <span>Generate plan</span>
        </span>
        <img
          alt="Rectangle94button1502"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9dad47ef-56ed-4ffa-856c-2baa51972a20/993ce356-91e9-4e09-88fb-f70a90178650?org_if_sml=11190"
          className="homepage-rectangle94button"
        />
        <span className="homepage-text02">
          <span>Choose plan</span>
        </span>
        <div className="homepage-group17svg">
          <div className="homepage-nav-bar-tab">
            <div className="homepage-group1">
              <img
                alt="Line51492"
                src="/external/line51492-e7ve.svg"
                className="homepage-line5"
              />
              <img
                alt="Line61492"
                src="/external/line61492-h6wu.svg"
                className="homepage-line6"
              />
            </div>
            <div className="homepage-group2">
              <img
                alt="Line51492"
                src="/external/line51492-7far.svg"
                className="homepage-line51"
              />
              <img
                alt="Line61492"
                src="/external/line61492-owtd.svg"
                className="homepage-line61"
              />
            </div>
          </div>
        </div>
        <span className="homepage-text04">
          <span>
            <span>
              Welcome back,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>username!</span>
          </span>
        </span>
        <span className="homepage-text09">
          <span>What would you like to do?</span>
        </span>
        <img
          alt="Line8svg1502"
          src="/external/line8svg1502-szmc.svg"
          className="homepage-line8svg"
        />
        <img
          alt="Line9svg1502"
          src="/external/line9svg1502-navp.svg"
          className="homepage-line9svg"
        />
      </div>
    </div>
  )
}

export default Homepage
