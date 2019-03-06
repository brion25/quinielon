import React from 'react'
import { Form, Icon, Input, Button, Row, Col, Layout } from 'antd'

import * as styles from './auth-view.module.css'
import { authUser } from '../service'
import { StateContext } from '../../../store/provider'
import { AUTH_USER } from '../../../store/reducer'

const { Content } = Layout

const AuthView = (props) => {
  const { getFieldDecorator } = props.form
  const { dispatch } = React.useContext(StateContext)
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [ loading, setLoading ] = React.useState(false)
  const usernameConfig = {
    rules: [
      {
        required: true,
        message: 'Por favor introduce tu correo o Numero Telefonico'
      }
    ]
  }
  const passwordConfig = {
    rules: [
      {
        required: true,
        message: 'Por favor introduce tu contraseña'
      }
    ]
  }

  const onSubmit = e => {
    e.preventDefault()
    authUser({username, password}).then(token => {
      setLoading(false)
      dispatch({
        type: AUTH_USER,
        token
      })
    })
  }

  return (
    <Layout>
      <Content className={styles.content}>
        <Row gutter={{md: 25, sm: 10}}>
          <Col md={{span: 6, offset: 6}} className={styles.coverWrapper}>
            <img className={styles.cover} src="https://pbs.twimg.com/media/DxYsDkTWwAACOsE.jpg" alt="Leo Messi" />
          </Col>
          <Col md={{span: 6, offset:0 }} xs={{span: 20, offset: 2}}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/f/f8/MX_logo.png" alt="Liga MX" />
            <Form onSubmit={onSubmit}>
              <Form.Item>
                {getFieldDecorator('username', usernameConfig)(
                  <Input
                    prefix={<Icon type="user"/>}
                    placeholder="E-mail/# Telefonico"
                    onChange={({target}) => setUsername(target.value)}/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', passwordConfig)(
                  <Input
                    prefix={<Icon type="lock"/>}
                    type="password"
                    placeholder="Contraseña"
                    onChange={({target}) => setPassword(target.value)}/>
                )}
              </Form.Item>
              <Button loading={loading} type="primary" htmlType="submit" className={styles.login} onClick={() => setLoading(true)}>
                Inicia Sesion
              </Button>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Form.create({name: 'quinielon-form'})(AuthView)
