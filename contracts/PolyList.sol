//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PolyList {
    
    struct jobDetails{
        string job;
        address recruiter;
        uint jobID;
        string description;
        uint price;
        string gitLink;
        bool isOpen;
        uint closingDate;
    }
    struct submissionDetails{
        uint submissionId;
        string gitLink;
        string contact;
        address payable dev;
    }
    enum Role{
        dev,
        recruiter
    }

    jobDetails[] public allJobs;
    
    mapping(uint => submissionDetails[]) submissionArray;

    mapping(address => Role) public registeredRoles;

    function newDeveloper () public returns(bool){
        require(registeredRoles[msg.sender] != Role.recruiter,"Already a Recruiter");
        registeredRoles[msg.sender] = Role.dev;
        return(true);
    }

    function newRecruiter () public returns(bool){
        require(registeredRoles[msg.sender] != Role.dev,"Already a Developer");
        registeredRoles[msg.sender] = Role.recruiter;
        return(true);
    }

    function newJob(
        string memory job,
        string memory description,
        string memory gitLink,
        uint closingDate
    ) public payable returns(bool){
        require(registeredRoles[msg.sender] == Role.recruiter, "Only Recruiters can create roles");
        require(msg.value != 0, "No zero payment jobs");
        allJobs.push(jobDetails(job, msg.sender, (allJobs.length),description, msg.value, gitLink, true, closingDate));
    }

    function getAllJobs() public view returns(jobDetails[] memory jobs){
        return(allJobs);
    }

    function openStream (address payable dev, uint jobID) public{
        require(registeredRoles[msg.sender] == Role.recruiter, "Not callled by a recruiter");
        require(allJobs[jobID].recruiter == msg.sender, "Not your job");
        allJobs[jobID].isOpen = false;
    }

    function submitProposal (string memory workLink, string memory contact, uint jobID) public{
        require(registeredRoles[msg.sender] == Role.dev, "Only Devs are allowed to propose");
        require(allJobs[jobID].isOpen == true, "Job has been closed");
        uint entryID = submissionArray[jobID].length;
        submissionArray[jobID].push(submissionDetails(entryID, workLink, contact, payable(msg.sender)));
    }

    function getAllProposals (uint jobID) public view returns(submissionDetails[] memory submissions){
        return (submissionArray[jobID]);
    }

    function chooseProposal (uint jobID, uint submissionID) public {
        require(registeredRoles[msg.sender] == Role.recruiter, "Not callled by a recruiter");
        allJobs[jobID].isOpen = false;
        submissionDetails memory chosenWork = submissionArray[jobID][submissionID];
        (bool success, bytes memory data) = chosenWork.dev.call{value: allJobs[jobID].price}("");
        require(success, "Failed to send Ether");
    }

}
