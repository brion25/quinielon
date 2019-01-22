import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Logo from '../../../components/logo'
import Button from '../../../components/button/button'
import Input from '../../../components/input/input'

import { links } from '../../nav'

import * as styles from './auth-view.module.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin(e) {
    e.preventDefault()

    const {
      history
    } = this.props

    history.push(links.home.path)
  }

  render() {
    return (
      <div className={styles.homeView}>
        <div className={styles.presentation}>
          <Logo className={styles.logo}/>
          <h2 className={styles.presentationHeader}>Quinielon</h2>
          <span className={styles.presentationSubheader}>Diversion en Grupo!</span>
          <form onSubmit={this.onLogin} className={styles.login}>
            <Input label="E-mail/Telefono" />
            <Input label="Password" type="password" />
            <Button>Accede!</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
