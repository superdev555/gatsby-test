import React from 'react'
import { navigate } from 'gatsby'

import {
  getUserNickname,
  isLoggedIn,
} from '../../services/auth'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

class Home extends React.Component {
  state = {
    content: '',
    isSubmitButtonDisabled: false,
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  componentDidMount() {
    if (!isLoggedIn()) {
      navigate(`/`)
      return
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
            getUserNickname(),
          ]}
        />
        <div />
        <div></div>
      </Layout>
    )
  }
}

export default Home
