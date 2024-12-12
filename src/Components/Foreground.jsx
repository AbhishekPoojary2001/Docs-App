import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const refer=useRef(null)
    const data=[
      {
        desc:"This is a card contains data having background color black.",
        filesize:"10 mb",
        close:false,
        tag:{
          isopen: false, tagtitle:"Download"},
        },
        {
          desc:"This is a card contains data having background color black.",
          filesize:"10 mb",
          close:true,
          tag:{
            isopen: true, tagtitle:"Download"},
          },
          {
            desc:"This is a card contains data having background color black.",
            filesize:"10 mb",
            close:true,
            tag:{
              isopen: false, tagtitle:"Download"},
            },
      
    ];


  return (
    <div ref={refer} className='fixed top-0 left-0 w-full h-full   z-[3] p-6 flex gap-5 flex-wrap'>
       
      {data.map((item,index)=>(
        <Card data={item} reference={refer}/>
      ))}
        </div> 
  )
}

export default Foreground