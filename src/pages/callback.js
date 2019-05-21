import React from 'react'
import { navigate } from 'gatsby'
import { handleAuthentication } from '../services/auth'
import loading from '../images/loading.svg'

import Layout from '../components/layout'

import styles from '../components/layout.module.scss'

export default () => {
  handleAuthentication(() => navigate('/app/home'))

  return (
    <Layout>
      <div className={styles.container}>
        <img src={loading} alt="loading..." />
      </div>
    </Layout>
  )
}
