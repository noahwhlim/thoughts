import React from 'react'

interface Info {
    title: string;
    content: string;
    date: string;
}

const Card = ({title, content, date}: Info) => {
    
  return (
    <div className='flex flex-col border-2 rounded-lg my-4 mx-80 p-4 '>
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <p>{content}</p>
        <p className='flex justify-end text-gray-500 text-sm'>{date}</p>
    </div>
  )
}

export default Card