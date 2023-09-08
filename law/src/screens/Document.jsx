import React from 'react'
import Templates from './Templates'
import { useParams } from 'react-router-dom'

export const Document = () => {
  const {title,prompt} = useParams()
  console.log(title,prompt)
  return (
    <div className='textarea'>
    {/* <iframe
  src="https://app.box.com/embed/sign/document/f14d7098-a331-494b-808b-79bc7f3992a3/f14d7098-a331-494b-808b-79bc7f3992a4"
  width="400"
  height="600"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen
></iframe> */}
    </div>
  )
}
