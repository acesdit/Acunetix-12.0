import React from "react";
import reel from "../assets/Reel.mp4";

function Reel() {
    const Reeldata = [
        { link: reel, data: "This is reel" },
        { link: reel, data: "This is reel" },
        { link: reel, data: "This is reel" }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center bg-black p-5">
            <h2 className="text-white text-3xl text-center w-full m-10 my-2">PAST EVENTS</h2>
            <div className="flex flex-nowrap justify-between md:justify-evenly gap-2 w-[90%] max-w-[800px] mt-15 bg-gray-300 rounded-2xl p-5 overflow-x-auto whitespace-nowrap">
                {Reeldata.map((reel, index) => (
                    <div key={index} className="flex flex-col items-center flex-none w-[30%] max-w-[120px] md:max-w-[150px] bg-gray-300 rounded-2xl">
                        <video 
                            className="w-full max-h-[180px] md:max-h-[250px] rounded-2xl" 
                            controls
                        >
                            <source src={reel.link} type="video/mp4"/>
                        </video>
                        <h3 className="text-black text-center mt-2 text-sm md:text-base">
                            {reel.data}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reel;