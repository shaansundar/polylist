import Card from "./Card";
import { ethers } from "ethers";
import { sequence } from '0xsequence';
import PolyList from '../PolyList.json';
import React, { useState } from 'react';

const ContractAddress = "0x0C16777448660594A082293a90af3eb9241561B1";

const wallet = new sequence.Wallet('mumbai');

console.log("🚀 ~ file: JobBoard.jsx ~ line 8 ~ wallet", wallet)
const provider = wallet.getProvider();
console.log("🚀 ~ file: JobBoard.jsx ~ line 10 ~ provider", provider)
const signer = wallet.getSigner();
console.log("🚀 ~ file: JobBoard.jsx ~ line 12 ~ signer", signer)

const gameContract = new ethers.Contract(
	ContractAddress,
	PolyList.abi,
	provider
);

const gameContractSigned = new ethers.Contract(
	ContractAddress,
	PolyList.abi,
	signer
);

console.log("🚀 ~ file: JobBoard.jsx ~ line 21 ~ gameContract", gameContract)



const JobBoard = () => {
	const [allJobs, setallJobs] = useState(null);
	const [getCards, setgetCards] = useState(null);
		const allOpenJobs = async () => {
			console.log('chainId:', await wallet.getChainId())
			let allOpenJobs = await gameContract.getAllJobs()
			setallJobs(allOpenJobs);
			setgetCards( allJobs.map((item)=>(	<Card
				job={item[0]}
				recruiter={item[1]}
				jobID={`${item[2]}`}
				description={item[3]}
				price={`${item[4]*10**(-18)} MATIC`}
				gitLink={item[5]}
				isOpen={item[6]}
				gameContract = {gameContractSigned}
				signer = {signer}
				abi = {PolyList}
				address = {ContractAddress}
			/>)))
		}
		allOpenJobs();

	

	return (
		<div className=" w-5/6 min-h-screen flex flex-col items-center justify-start mt-4">
			{getCards}
		</div>
	);
}

export default JobBoard;

// string job;
//         address recruiter;
//         uint jobID;
//         string description;
//         uint price;
//         string gitLink;
//         bool isOpen;
//         uint closingDate;