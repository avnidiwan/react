import React from 'react'

const Card = (props) => {
  return (
    <div className="h-50 w-80 bg-zinc-800 rounded-3xl p-8 m-5 text-white flex flex-col justify-between">
      <div className=" w-full flex justify-start">
        <div className=" bg-violet-600 h-10 w-10 rounded-full flex justify-center items-center text-white text-lg">
          {props.icon}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className='text-2xl font-bold '>{props.title}</h1>
        <p className='text-xs'>{props.desc}</p>
      </div>
    </div>
  )
}

export default Card
