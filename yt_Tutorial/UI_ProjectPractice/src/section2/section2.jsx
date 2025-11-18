import React from 'react'
import Card from './card.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles,faHighlighter,faUpload } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {

    const sec2data = [
        {
            icon:<FontAwesomeIcon icon={faUpload} />,
            title: 'Upload Brief',
            desc: 'Lorem ipsum dolor sit amet consectetur elit. Labore, molestiae? At quod'
        },
        {
            icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
            title: 'Generate Designs',
            desc: 'adipisicing elit. Labore, molestiae?  assumenda ullam saepe quos sequi!'
        },
        {
            icon: <FontAwesomeIcon icon={faHighlighter} />,
            title: 'Refine Creation',
            desc: 'ipsum dolor sit amet consectetur adipisicing ullam saepe quos sequi!'
        }
    ]



    return (
        <>
            <div className="bg-black h-110 w-full  p-20 ">
                <div className="w-200"><h1 className="text-4xl font-bold text-white">Unleash your <span className="text-violet-600">Creativity</span></h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, molestiae? At quod culpa in, reiciendis assumenda ullam saepe quos sequi!</p>
                </div>
                
              <div className="flex">
                  {
                    sec2data.map((a, b) => {
                        return (
                            <Card icon={a.icon} title={a.title} desc={a.desc} key={b} />
                        )
                    })
                }
              </div>
            </div>

        </>
    )
}

export default Section2
