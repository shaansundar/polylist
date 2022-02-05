# PolyList

PolyList is a decentralised freelance hiring DApp built with trustless escrow contracts & payment streams (Using Superfluid)

### Description
Existing spaces like UpWork & Freelance.com successfully solve the challenge of hiring unknown developers as "Freelancers" for a client's project, whilst assuring payment for the work done. Here, they privately act as escrows, and have been doing a fantastic job!

However, some issues still posses:
1) **High Fees**: These platforms tend to charge anywhere from 5-20% of the promised payment as a service charge
2) **Trust**: Trusting in a single organisation always lead to flaws and vulnerabilities
3) **No Streaming**: Developers do not get paid in real time streaming.... Web3 can boastfully do that, and make sure the developer's time is valued, no matter if the work is accepted or not 

### How it's made
This project uses ReactJS along with AntD for a smooth frontend experience, and EthersJS for providing a connectivity for the solidity contracts which leverages the powerful use-cases blockchain offers. It also uses Superfluid SDK to optionally open payment streams if that interests the recruiter!

### Get started with this contract
```bash
npx hardhat compile
npx hardhat deploy
```
