import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import {
  isLoggedIn,
  handleLogin,
  logout,
  getUserNickname,
} from '../services/auth'
import Button from './button'

import styles from './layout.module.scss'

const nickname = getUserNickname()

const Header = ({ siteTitle }) => (
  <div>
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
        {isLoggedIn() ? (
          <Button
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
            variant="header"
            title={`Logout ${nickname}`}
          >
            Logout
          </Button>
        ) : (
          <Button variant="inline" onClick={handleLogin}>
            Login
          </Button>
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
