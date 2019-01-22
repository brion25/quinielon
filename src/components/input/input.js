import React from 'react'
import PropTypes from 'prop-types'
import _omit from 'lodash/omit'

import * as styles from './input.module.css'

const Input = (props) => {
  const {
    label,
    className,
  } = props

  const inputProps = _omit(props, ['label', 'className'])

  return (
    <div className={`${className} ${styles.inputWrapper}`}>
      <input {...inputProps} className={`${styles.input}`} />
      {label && (
        <label className={`${styles.label}`}>{label}</label>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
}

Input.defaultProps = {
  className: ''
}

export default Input
