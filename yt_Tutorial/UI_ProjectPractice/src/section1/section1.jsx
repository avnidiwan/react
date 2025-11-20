import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCompassDrafting, faMagnifyingGlass, faCircleInfo, faUser } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
    return (
        <>
            <div className="h-80 w-full bg-black p-10 flex ">

                <div className=" h-full w-2/3  bg-zinc-800 text-white rounded-tl-4xl rounded-bl-4xl p-8 flex flex-col justify-between" >
                    <h1 className="text-5xl font-bold">
                        Your AI-Powered<br /><span className="text-violet-600">Design </span>Assistant</h1>
                    <p className="text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum modi recusandae quas? Voluptatem sapiente laborum impedit corporis sint quas iure quo earum ipsam. Totam consectetur reiciendis error rerum aut!</p>
                    <div>
                        <button className="bg-violet-600 text-white p-2 text-xs">Get Started</button>
                        <button className="text-white text-xs ml-2">More Templates</button>
                    </div>
                </div>
                <div className=" h-full w-1/3  bg-zinc-800 text-white rounded-tr-4xl rounded-br-4xl" >
                    <img className="h-full w-full " src="https://images.unsplash.com/photo-1692316647214-f8dc224626b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZpb2xldCUyMGdsYXNzJTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3DD" />
                </div>
            </div>
            <div className="h-10 w-full bg-black flex justify-around align-top text-white text-xl">
                <span><FontAwesomeIcon icon={faHouse} />Home </span><span><FontAwesomeIcon icon={faCompassDrafting} />Design</span><span><FontAwesomeIcon icon={faMagnifyingGlass} />Explore</span><span><FontAwesomeIcon icon={faCircleInfo} />About-us</span><span><FontAwesomeIcon icon={faUser} />Contact</span>
            </div>
        </>
    );
};

export default Section1;

