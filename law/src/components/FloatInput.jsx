import React,{useState} from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const FloatInput = ({card}) => {
    const [prompt ,setprompt]=useState()

  return (<div id='input1'>
        <input id='input2'  className='input' onChange={(e)=>{setprompt(e.target.value)}}></input>  <Link to={`/templates/${card}/${prompt}`}><AiOutlineSend className='search1' style={{position:'absolute'}}/></Link>
        </div>
        
  )
}
