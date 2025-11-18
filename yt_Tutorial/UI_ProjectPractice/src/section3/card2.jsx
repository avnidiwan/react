import React from 'react'

const Card2 = (props) => {
    return (
        <>
            <div className={`h-90 w-80 rounded-3xl p-8 m-5 text-white flex flex-col justify-between 
    ${props.highlight ? "bg-violet-600" : "bg-zinc-800"}`}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-md">{props.type}</h3>
                    <h1 className="text-3xl font-bold">{props.price}</h1>
                    <p className="text-xs">{props.description}</p>
                </div>
                <div className="text-xs">
                    <ul className="list-disc list-inside space-y-1">
                        {
                            props.features.map((a, b) => { return (<li>{a}</li>) })
                        }
                    </ul>
                </div>
                <div className="">
                    <button className={`w-full h-10 font-bold ${props.highlight ? "bg-zinc-800" : "bg-violet-600"} `}>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Card2
