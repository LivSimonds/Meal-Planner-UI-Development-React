import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in1.css'

const SignIn1 = (props) => {
  return (
    <div className="sign-in1-container">
      <Helmet>
        <title>Sign-in1 - exported project</title>
        <meta property="og:title" content="Sign-in1 - exported project" />
      </Helmet>
      <div className="sign-in1-sign-in3">
        <span className="sign-in1-text">
          <span>BulbaBites</span>
        </span>
        <span className="sign-in1-text02">
          <span className="sign-in1-text03">Not a member?</span>
          <span className="sign-in1-text04">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Register</span>
        </span>
        <img alt="Arrow12533" src className="sign-in1-arrow1" />
        <img
          alt="Rectangle932534"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9dad47ef-56ed-4ffa-856c-2baa51972a20/29329137-2106-41df-9a47-261f02b3e944?org_if_sml=11133"
          className="sign-in1-rectangle93"
        />
        <img
          alt="Rectangle942534"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9dad47ef-56ed-4ffa-856c-2baa51972a20/93e32a32-b6e2-4b59-892f-d25aca6dc7f0?org_if_sml=11133"
          className="sign-in1-rectangle94"
        />
        <span className="sign-in1-text06">
          <span>Username or email</span>
        </span>
        <span className="sign-in1-text08">
          <span>Password</span>
        </span>
        <span className="sign-in1-text10">
          <span>Forgot password?</span>
        </span>
        <div className="sign-in1-group37">
          <span className="sign-in1-text12">
            <span>Sign In</span>
          </span>
        </div>
        <img
          alt="Line372536"
          src="/external/line372536-madf.svg"
          className="sign-in1-line37"
        />
      </div>
    </div>
  )
}

export default SignIn1
