import React, { useState } from 'react';


const NewJob = () => {
    
    const [isOpen, setisOpen] = useState(false);
    return ( 
            <div onClick={()=>{setisOpen(!isOpen)}} className=" w-4/5 flex flex-col items-center justify-center bg-black text-white my-4 mx-6 p-4 ">
                <h1>+ Add a new Job</h1>
            {isOpen && <div className='w-full p-4 px-4 flex flex-col'>
                <div className='flex items-center justify-between w-1/2'>
                    <h4 className='text-md text-gray-600'>Submission Link</h4>
                    <input className='ml-5 w-40' type="text" />
                </div>
                <div className='flex items-center mt-5 justify-between w-1/2'>
                    <h4 className='text-md text-gray-600'>Contact (Telegram/Email/LinkedIn)</h4>
                    <input className='ml-5 w-40' type="text" />
                </div>
            </div> }

            </div>
     );
}
 
export default NewJob;