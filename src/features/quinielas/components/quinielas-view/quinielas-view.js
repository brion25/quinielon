import React from 'react'
import moment from 'moment'
import _isUndefined from 'lodash/isUndefined'
import _isEmpty from 'lodash/isEmpty'
import { Card, Row, Col } from 'antd'

import { connect } from '../../../../store/provider'
import { logoutUser } from '../../../auth/service'
import { getUserQuinielas } from '../../service'
import * as styles from './quinielas-view.module.css'

const colSize = {
  xs: 24,
  md: 6
}

const renderLoading = loading => {
  return (
    <Row gutter={15}>
      {[1,2,3,4].map(renderQuinielas(loading))}
    </Row>
  )
}

const renderQuinielas = loading => ({name, matches, id, endDate}, i) => {
  return (
    <Col xs={colSize.xs} md={colSize.md} key={i}>
      {loading ? (
        <Card loading={loading} className={styles.card} />
      ) : (
        <Card className={styles.card} title={name}>
          <p>
            Esta quiniela se cerro el dia {moment(endDate).format('DD-MM-YYYY')}
          </p>
          <p>
            Cantidad de encuentros: {matches.length}
          </p>
        </Card>
      )}
    </Col>
  )
}

const QuinielasView = ({logoutUser, getUserQuinielas, quinielas}) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (_isUndefined(quinielas)) {
      getUserQuinielas().then(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [quinielas])


  console.log(quinielas)

  if (_isEmpty(quinielas) && !_isUndefined(quinielas)) {
    return (
      <h2>No tienes quinielas todavia, crea una!</h2>
    )
  }

  if (loading) {
    return renderLoading(loading)
  }

  return (
    <Row gutter={25}>
      {quinielas.map(renderQuinielas(loading))}
    </Row>
  )
}

const mapDispatchToProps = {
  logoutUser,
  getUserQuinielas
}

const mapStateToProps = state => ({
  quinielas: state.quinielas
})

export default connect(mapStateToProps, mapDispatchToProps)(QuinielasView)
