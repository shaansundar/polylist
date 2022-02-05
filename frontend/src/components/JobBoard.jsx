import Card from "./Card";
import { ethers } from "ethers";
import { sequence } from '0xsequence';

const ContractAddress = "0x0C16777448660594A082293a90af3eb9241561B1";

const JobBoard = () => {
    const wallet = new sequence.Wallet('polygon');
    return ( 
        <div className=" w-5/6 min-h-screen flex flex-col items-center justify-start mt-4">
            <Card 
                job="Develop Solidity" 
                recruiter="0xE22c6584D5b43c536d6FC26898d1275243cBb882" 
                jobID="2" 
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi quae, cupiditate facilis incidunt id sint, temporibus ipsam quibusdam laborum sit. Tempore molestiae similique, quaerat eius id ratione quae sint? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi quae, cupiditate facilis incidunt id sint, temporibus ipsam quibusdam laborum sit. Tempore molestiae similique, quaerat eius id ratione quae sint? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi quae, cupiditate facilis incidunt id sint, temporibus ipsam quibusdam laborum sit. Tempore molestiae similique, quaerat eius id ratione quae sint? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam animi quae, cupiditate facilis incidunt id sint, temporibus ipsam quibusdam laborum sit. Tempore molestiae similique, quaerat eius id ratione quae sint?" 
                price="100 MATIC"
                gitLink="https://github.com/job1"
                isOpen = {true}
                closingDate = "Dec 27 2022"
            />
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