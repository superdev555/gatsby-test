import React from 'react'
import PropTypes from 'prop-types'
import { getUserNickname } from '../services/auth'

import styles from './layout.module.scss'

const nickname = getUserNickname()

const Footer = () => (
  <div className={styles.footer}>
    <nav>
      <div className={styles.footer-col}>
        <h5 className={styles.footer-title}>{nickname} © 2019</h5>
        <p className={styles.footer-item-text}>
          Built with{' '}
          <a className={styles.footer-link} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
          .
        </p>
      </div>
    </nav>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
