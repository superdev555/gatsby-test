import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import {
  isLoggedIn,
  handleLogin,
  logout,
  getUserNickname,
} from '../services/auth'

import styles from './layout.module.scss'

const nickname = getUserNickname()

const Header = ({ siteTitle }) => (
  <div>
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.menuItems}>
          <Link to="/" className={styles.link}>
            {siteTitle}
          </Link>
        </div>
        {isLoggedIn() ? (
          <Link
            to=""
            className={styles.link}
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
            title={`Logout ${nickname}`}
          >
            Logout
          </Link>
        ) : (
          <Link
            to=""
            className={styles.link}
            onClick={event => {
              event.preventDefault()
              handleLogin()
            }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
