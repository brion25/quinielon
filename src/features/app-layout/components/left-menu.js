import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar, Icon } from 'antd'

import { connect } from '../../../store/provider'
import { getUserInfo } from '../service'
import * as styles from './left-menu.module.css'
import * as quinielasUrls from '../../quinielas/urls'

const { Sider } = Layout

const LeftMenu = ({isAnonymous, getUserInfo}) => {
  const [ user, setUser ] = React.useState('')

  React.useEffect(() => {
    if (!isAnonymous) {
      getUserInfo().then(user => setUser(user.name))
    }
  }, [isAnonymous])

  const [ collapsed, onCollapse ] = React.useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <div className={styles.user}>
        <Avatar size="large">{user.substring(0,1).toUpperCase()}</Avatar>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['quinilas-menu']} mode="inline">
        <Menu.SubMenu key="quinilas-menu" title={<span><Icon type="folder" /><span>Quinielas</span></span>}>
          <Menu.Item key="quinielas-see">
            <Link to={quinielasUrls.action('see')}>
              <Icon type="eye" />
              <span>Ver</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="quinielas-add">
            <Link to={quinielasUrls.action('create')}>
              <Icon type="plus-circle" />
              <span>Crear</span>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="bets-menu" title={<span><Icon type="dollar" /><span>Apuestas</span></span>}>
          <Menu.Item key="bets-see">
            <Icon type="eye" />
            <span>Ver</span>
          </Menu.Item>
          <Menu.Item key="bets-add">
            <Icon type="plus-circle" />
            <span>Crear</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  )
}

const mapStateToProps = state => ({
  isAnonymous: state.isAnonymous,
})

const mapDispatchToProps = {
  getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
