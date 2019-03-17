import React from 'react'
import { Layout } from 'antd'

import LeftMenu from './left-menu'
import * as styles from './app-layout.module.css'

const { Content } = Layout

const AppLayout = ({children}) => (
  <main>
    <Layout className={styles.layout}>
      <LeftMenu/>
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>
  </main>
)

export default AppLayout
