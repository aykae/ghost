<h1 align="center">Hi 👋, we're Ghost Labs 👻</h1>

Our project is **Ghost Protocol**, an EVM compatible dApp providing life insurance on-chain, allowing for increased speed, security, and flexibility of contracts. We are excited to bring other types of insurance other than those used for hedging tokens on blockchain and see potential in the growth of this project. 

Here is a link to our [tweet](https://x.com/aykae_r/status/1761419917260099990), which summarizes our project in a short-form if you would prefer to read it there.

<h2 align="left">Brief Description 📖</h2>

We’re all trying to lead great lives, but sometimes unexpected events may cause us to face accidents or terminal illness, leaving our family members without a source of income to provide for them. This is where life insurance becomes valuable, taking care of expenses if anything were to ever happen, a market that 52% of Americans participate in and an industry well worth over $750 Billion. 

Traditional life insurance is frustrating, consisting of many phone calls and medical exams over the course of 4 to 6 weeks, and can also have a high risk of claim denials where death is not reimbursed. Ghost protocol solves this, being built using Chainlink functions and a subgraph to offer many different insurance contracts, each with different prices, lengths of coverage, and payout which can be entered immediately upon giving basic information from a user. Given the pool of users in the policy, we calculate the health of the protocol based on the risk of the users and the likelihood that someone will have to exercise their contract. In order to track if someone has passed away, we take in a person’s SSN and query it using Chainlink functions in an API database to see if they have passed away in the government database, streamlining the process. Then, their dependents whose wallets have been written into the contract as having access to money when the contract was created will then automatically be able to connect from the vault. 

We also give users the opportunity to make their own policies because we believe that the best policy will win through democratization, but our suggested price of the insurance is calculated optimally. We’ve fine-tuned a standard select survival model that calculates the probability of death based on parameters like age and gender. The price is then calculated by discounting back the payout, multiplying by the probability of death, expected interest rates and calculating NPV. We expect many users to want to create their own insurance policies, so we have created a Subgraph to be able to index the insurance policies given the wallet address of the user who has signed the contract in order to query and sort the subgraph based on the health of the protocol and total value of the pool to show plans that are more secure on top and allow users to filter through different plans that are created in real-time. 

On the front-end, we used React and Typescript to create the website and connected it to our backend and smart contracts using Ethers.js. Our project involves three smart contracts, the Forest as well as two others Ghost Policy and Ghost Claim Verifier which were both written in Solidity and deployed on the Sepolia. The graph components were written in GraphQL and Typescript. In the future, we hope to be able to increase analytical capabilities on the subgraph and have more sophisticated risk modelling for insurance. We also envision our protocol expanding to accept more tokens as payment other than just Ethereum and offering a feature of allowing liquidity providers to deposit funds in the insurance policy without having to engage in the contract for a premium in return. 

<h2 align="left">Country/region 🇺🇸/(🇨🇦?)</h2>
We're all currently based in Philadelphia, USA, but fun fact: three of us actually lived in Canada at some point as well!

<h2 align="left">Technical solution 🤓</h2>
Our Decentralized Life Insurance protocol, Ghost Protocol, is written in Solidity for EVM-compatible blockchains. Our protocol allows monthly premiums to be paid to policy contracts that are paid out based on user settings and payment behavior over the lifetime of the contract. Claims are verified using Chainlink Functions, which serve as an oracle for the SSDI (Social Security Death Index) API with which we check whether an insurance claim is valid. An account abstraction implementation allows a policyholder to nominate a dependent who may accept claim payout funds on their behalf.

<h2 align="left">Project Theme 💸</h2>
Our project falls broadly within a DeFi theme, but we are more specifically doing insurance on-chain and in a way healthcare as well due to life insurance. 

<h2 align="left">Project Bounties 🏆</h2>
We're applying for Chainlink Bounty 2 (Best usage of Chainlink Functions), Chainlink Bounty 3 (Best usage of other Chainlink services), and Graph Bounty 1 (Best New Subgraph). 

<h2 align="left">Slide deck and presentation 📹</h2>

[Watch the Demo Video](https://youtu.be/uU0g-17JhG4)

<h2 align="left">Deployed Smart Contract Address 📍</h2>
1. GhostFactory: 0x0057142698fB40D5BBfa4A1332C05F581D0fF1D2 
<br>
2. GhostPolicy: 0x0f150005E5134F0bC328B16bAE541BC11f110D5d


<h2 align="left">Deployed to other platforms</h2>
We've deployed our Subgraph onto Subgraph Studio so that it can be used for queries. 

<h2 align="left">Additional information</h2>
This is not part of any past project that any of us have worked on in the past. We started this project when the hackathon began. 




