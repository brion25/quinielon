import React from 'react'
import moment from 'moment-timezone'

const Date = ({date, format = 'lll', className = ''}) => {
  const dateFormatted = moment(moment.tz(moment(date).format('YYYY-MM-DD HH:MM'), moment.tz.guess())._d).format(format)

  return (
    <div className={className}>
      {dateFormatted}
    </div>
  )
}

export default Date
