import React from "react";
import Image from "next/image";

function Survey (){
    return(
        <div className="container pt-20 px-20 mb-11">
            <div className="grid lg:grid-cols-[50%,1fr] gap-10">
                <div>
    <Image className="w-[100%] h-auto lg:w-auto lg:h-[90vh] hover:scale-[1.03] cursor-pointer
     ease-linear duration-[0.3s] hover:shadow-2xl shadow-gray-950"
    src="/survey.1.jpg"
     width={1000} 
    height={600}
    alt="survey image"/> 
    </div>

<div className="self-center">
        <h2 className="text-4xl md:text-6xl font-bold">Survey About</h2>
        <h2 className="text-4xl md:text-6xl font-bold pt-3">
         our  <span className="text-red-700 font-semibold pt-3">
            Food </span></h2>

        <p className="text-gray-700 font-medium pt-16">
        Your feedback helps us serve 
        you better Share your thoughts
        and let us know how we can enhance 
        your dining experience We value your opinion
        Tell us how we did and help us make 
        every visit even more memorable
        </p>


</div>
            </div>
        </div>
    )}

    export default Survey