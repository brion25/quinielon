import React from 'react'
import _omit from 'lodash/omit'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './nav.module.css'
import { LINKS } from '../constants'

const Nav = (props) => {
  const {
    location
  } = props

  if (location.pathname === LINKS.auth.path) {
    return null
  }
  return (
    <header className={styles.header}>
      <ul className={styles.links}>
        {Object.keys(_omit(LINKS, ['auth'])).map(linkName => {
          const link = LINKS[linkName]
          const isActive = link.path === location.pathname

          return (
            <li key={linkName}>
              <Link to={link.path} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>
                <FontAwesomeIcon className={styles.linkIcon} icon={link.icon}/>
                <span className={styles.linkLabel}>{link.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default withRouter(Nav)
