import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from './button.module.css'

const Button = ({children, className, icon, isRounded}) => {
  let content = children
  let classNames = [styles.button, className]

  if (icon) {
    content = (
      <FontAwesomeIcon icon={icon}/>
    )
  }

  if (isRounded) {
    classNames.push(styles.isRounded)
  }

  return (
    <button className={classNames.join(' ')}>{content}</button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isRounded: PropTypes.bool,
  children: PropTypes.node
}

Button.defaultProps = {
  className: ''
}

export default Button
