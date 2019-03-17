import React from 'react'
import { Table } from 'antd'

import Date from './date'
import * as styles from './events-table.module.css'

const { Column, ColumnGroup } = Table

const Team = ({src, name, imageFirst}) => (
  <div className={`${imageFirst ? '' : styles.isImageLast} ${styles.team}`}>
    <img src={src} alt={name} className={styles.teamImg} />
    <span className={styles.teamName}>{name}</span>
  </div>
)

const Result = ({local, visit}) => {
  if (!local && !visit) {
    return <div className={styles.result}>-</div>
  }

  return (
    <div className={styles.result}>{local} - {visit}</div>
  )
}

const EventsTable = ({name, matches}) => {
  const data = matches.map(({id, local, visit, date}) => ({
    key: id,
    date: <Date date={date} format="YYYY-MMM-DD" className={styles.date} />,
    local: <Team name={local.name} src={local.img} imageFirst />,
    result: <Result local={local.score} visit={visit.score} />,
    visit: <Team name={visit.name} src={visit.img} />
  }))

  return (
    <Table dataSource={data} pagination={false} rowClassName={styles.row}>
      <ColumnGroup title={name}>
        <Column title="Fecha" key="date" dataIndex="date"/>
        <Column title="Local" key="local" dataIndex="local"/>
        <Column title="-" key="result" dataIndex="result"/>
        <Column title="Visitante" key="visit" dataIndex="visit"/>
      </ColumnGroup>
    </Table>
  )
}

export default EventsTable
