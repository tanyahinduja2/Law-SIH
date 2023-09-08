import React from 'react'
import Templates from './Templates'
import { useParams } from 'react-router-dom'

export const Document = () => {
  const {title,prompt} = useParams()
  console.log(title,prompt)
  return (
    <div className='textarea'>
    
    </div>
  )
}
