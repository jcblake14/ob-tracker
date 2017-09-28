import React from 'react'
import {Container} from './styled'

export default function Main(props){
  const {children} = props

  return (
    <Container>
      {children}
    </Container>
  )
}