import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { connect } from '../../../../../store/provider'
import { getValidMatches } from '../../../service'

const SelectMatches = ({getValidMatches}) => {
  const [matches, setMatches] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  if (_isEmpty(matches) && !loading) {
    setLoading(true)
    getValidMatches().then(matches => {
      setMatches(matches)
      setLoading(false)
    })
  }

  console.log(matches)

  return (
    <h1>Hello</h1>
  )
}

const mapDispatchToProps = {
  getValidMatches
}

export default connect(null, mapDispatchToProps)(SelectMatches)
