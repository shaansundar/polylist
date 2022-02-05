const { expect } = require("chai");
const { ethers } = require("hardhat");


let polylist, deployedPolyList, owner, rec, dev1, dev2;

let title = "New Job";
let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reprehenderit porro illum excepturi! Quo doloribus aliquam dignissimos sit sequi ea placeat minima, autem maxime nemo corrupti, ut minus nihil cum."
let git = "https://github.com/shaansundar";
let price = "1";

beforeEach(async function () {
  polylist = await ethers.getContractFactory("PolyList");
  [owner, rec, dev1, dev2] = await ethers.getSigners();
  deployedPolyList = await polylist.deploy();
});


describe("PolyList Testcases", function () {
  
  it("Should enroll a new account as developer or recruiter ", async function () {
    
    // Dev 1 enroll
    // console.log(await deployedPolyList.connect(dev1).newDeveloper());
    
    // expect(await deployedPolyList.connect(dev1).newDeveloper()).to.equal(true);
    
    //  Dev 2 enroll
    let enroll2 = await deployedPolyList.connect(dev2).newDeveloper();
    expect(enroll2).to.equal(true);
    
    // Recruiter tries to enroll as dev should return false
    let recrutirerEnroll = await deployedPolyList.connect(rec).enrollNewRecruiter();
    expect(recrutirerEnroll).to.equal(true);
    
    expect(await deployedPolyList.connect(rec).enrollNewDev()).to.be.reverted;
    
    // Check directly from database
    let result1 = await deployedPolyList.registeredRoles(dev1.address);
    expect(result1).to.equal("dev");
    let result2 = await deployedPolyList.registeredRoles(dev2.address);
    expect(result2).to.equal("dev");
    let result3 = await deployedPolyList.registeredRoles(rec.address);
    expect(result3).to.equal("recruiter");

  });

  // it("Should let recruiters create new jobs",function(){
    
  //   // Dev tries to create a job should revert
  //   // expect(await deployedPolyList.connect(dev1).newJob(title, desc, git, price)).to.be.reverted;

  //   // Recruiter creates job successfully
  //   expect(await deployedPolyList.connect(rec).newJob(title, desc, git, price)).to.equal(true);

  //   // Check if job has been created

    


  // });
});
