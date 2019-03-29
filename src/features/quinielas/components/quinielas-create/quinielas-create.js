import React from 'react'
import { Steps } from 'antd'

import SelectMatches from './select-matches/select-matches'

const { Step } = Steps

const steps = [
  'Elige los partidos',
  'Llena los ultimos detalles',
  'Verifica tu Quiniela',
  'Listo!',
]

const renderStep = step => {
  switch(step) {
    case 0:
      return (
        <SelectMatches />
      )
    default:
      return null
  }
}

const QuinielasCreate = () => {
  const [step, setStep] = React.useState(0)

  return (
    <div>
      <h2>Crea una nueva Quiniela!</h2>
      <hr />
      <Steps current={step}>
        {steps.map((title, i) => (<Step key={i} title={title}/>))}
      </Steps>
      {renderStep(step)}
    </div>
  )
}

export default QuinielasCreate
