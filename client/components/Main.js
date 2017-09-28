import React from 'react'

export default function Main(props){
  const {children} = props

  return (
    <Container>
      {children}
    </Container>
  )
}