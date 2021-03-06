import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../services/auth'

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  state = {
    posts: [],
    isPostsLoaded: false,
  }

  componentDidMount() {
    if (isLoggedIn()) {
      navigate(`/app/home`)
      return null
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Login | Study Email Test"
          keywords={[
            `gatsby`,
            `application`,
            `react`,
            `study-email-test`,
            `auth0`,
          ]}
        />
      </Layout>
    )
  }
}

export default IndexPage
