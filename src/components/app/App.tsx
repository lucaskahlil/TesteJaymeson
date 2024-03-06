import React from 'react'
import { ContainerApp } from './style'
import RegisterCustomer from '../RegisterCustomer/RegisterCustomer'

const App: React.FC = () => {
  return (
    <ContainerApp>
     <RegisterCustomer />
    </ContainerApp>
  )
}

export default App