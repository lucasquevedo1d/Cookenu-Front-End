import { CircularProgress } from '@mui/material'
import React from 'react'
import { LoadingContainer } from './Styled'

const LoadingPage = () => {
  return (
    <LoadingContainer>
        <CircularProgress color='primary' size={80}/>

    </LoadingContainer>
  )
}

export default LoadingPage