import React from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'

import { getUserNickname, getUserProfileImage, logout, isLoggedIn } from '../../services/auth'

import Layout from '../../components/layout'
import SEO from '../../components/seo'


const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 4px;
  resize: none;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: #434343;
  font-family: sans-serif;
`

const ImageStyled = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
  border-radius: 50%;
`

class Home extends React.Component {
  state = {
    content: '',
    isSubmitButtonDisabled: false,
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    if (!isLoggedIn()) {
      navigate(`/`)
      return
    }
  }

  render() {
    return (<Layout>
      <SEO title="Login | Study Email Test" keywords={[`gatsby`, `application`, `react`, `study-email-test`, `auth0`, getUserNickname()]} />
      <div>
        
      </div>
    </Layout>)
  }
}

export default Home
