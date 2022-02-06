import React from 'react';

const Card = (props) => {
    const [IsOpen, setIsOpen] = React.useState(false);
    const [link, setlink] = React.useState(null);
    const [contact, setContact] = React.useState(null);
    const gameContract = props.gameContract;
    const handleLinkChange = (event) => {
        setlink(event.target.value);
    }
    const handleContactChange = (event) => {
        setContact(event.target.value);
    }

    const handleSubmission = async(event) => {


        let id = props.jobID
        // let data = props.abi.encodeFunctionData(
        //     'submitProposal', [link, contact, id]
        //   )
        const waveTxn = await gameContract.submitProposal(link, contact, id)
        await waveTxn.wait();
        alert("Mined -- ", waveTxn.hash);
        //   const tx = {
        //     to: props.address,
        //     data: data
        //   }
        //   try{
        //   const txnResp = await props.signer.sendTransaction(tx)
        //   await txnResp.wait()
        //   alert('transaction hash:', txnResp.hash)
        //   }catch(e){
        //       alert(e);
        //   }

    }

    return ( 
        <div className=" w-full flex flex-col items-start justify-start bg-gray-50 my-2 mx-6 p-4">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-3xl font-bold">{props.job}</h1>
                <h1 className="text-sm font-light italic">Recruiter : {props.recruiter}</h1>
            </div>
            <p className="pt-4">{props.description}</p>
            <h1 className="text-md pt-2 text-green-500 font-bold">Price: {props.price}</h1>
            {IsOpen && <div className='w-full p-4 px-4 flex flex-col'>
                <div className='flex items-center justify-between w-1/2'>
                    <h4 className='text-md text-gray-600'>Submission Link</h4>
                    <input className='ml-5 w-40' type="text" onChange={handleLinkChange} />
                </div>
                <div className='flex items-center mt-5 justify-between w-1/2'>
                    <h4 className='text-md text-gray-600'>Contact (Telegram/Email/LinkedIn)</h4>
                    <input className='ml-5 w-40' type="text" onChange={handleContactChange}/>
                </div>
            </div> }
            <div className="flex w-full items-center justify-end">
                
                <a href={props.gitLink}><button className="w-40 mt-4 text-black h-10">Open Job</button></a>
                {props.isOpen && !IsOpen && <button className="w-40 mt-4 mx-4 text-white h-10 bg-black" onClick={async()=>{setIsOpen(!IsOpen)}}>Submit Work</button>}
                {props.isOpen && IsOpen && <button className="w-40 mt-4 mx-4 text-white h-10 bg-black" onClick={handleSubmission}>Send</button>}
                {!props.isOpen && <button className="w-40 mt-4 mx-4 text-white h-10 bg-gray-400 cursor-not-allowed">Work Closed</button>}
            </div>
            
        </div>
     );
}
 
export default Card;

// string job;
//         address recruiter;
//         uint jobID;
//         string description;
//         uint price;
//         string gitLink;
//         bool isOpen;
//         uint closingDate;