<h1 align="center">Hi 👋, we're Ghost Labs 👻</h1>

Our project is **Ghost Protocol**, a dApp providing life insurance on-chain, allowing for increased speed, security, and flexibility of contracts. We are excited to bring other types of insurance other than those used for hedging tokens on blockchain and see potential in the growth of this project. 

Here is a link to our tweet, which summarizes our project in a short-form if you would prefer to read it there: 

<h2 align="left">Brief Description</h2>

We’re all trying to lead great lives, but sometimes unexpected events may cause us to face accidents or terminal illness, leaving our family members without a source of income to provide for them. This is where life insurance becomes valuable, taking care of expenses if anything were to ever happen, a market that 52% of Americans participate in and an industry well worth over $750 Billion. 

Traditional life insurance is frustrating, consisting of many phone calls and medical exams over the course of 4 to 6 weeks, and can also have a high risk of claim denials where death is not reimbursed. Ghost protocol solves this, being built using Chainlink functions and a subgraph to offer many different insurance contracts, each with different prices, lengths of coverage, and payout which can be entered immediately upon giving basic information from a user. Given the pool of users in the policy, we calculate the health of the protocol based on the risk of the users and the likelihood that someone will have to exercise their contract. In order to track if someone has passed away, we take in a person’s SSN and query it using Chainlink functions in an API database to see if they have passed away in the government database, streamlining the process. Then, their dependents whose wallets have been written into the contract as having access to money when the contract was created will then automatically be able to connect from the vault. 

We also give users the opportunity to make their own policies because we believe that the best policy will win through democratization, but our suggested price of the insurance is calculated optimally. We’ve fine-tuned a standard select survival model that calculates the probability of death based on parameters like age and gender. The price is then calculated by discounting back the payout, multiplying by the probability of death, expected interest rates and calculating NPV. We expect many users to want to create their own insurance policies, so we have created a Subgraph to be able to index the insurance policy 

On the front-end, we have used React to 

<h2 align="left">Country/region 🇺🇸/(🇨🇦?)</h2>
We're all currently based in Philadelphia, USA, but fun fact: three of us actually lived in Canada at some point as well!

<h2 align="left">Technical solution</h2>
Our project is based on 

<h2 align="left">Project Theme</h2>
Insurance, infrastructure, finance 

<h2 align="left">Project Bounties</h2>
We're applying for Chainlink Bounty 2 (Best usage of Chainlink Functions), Chainlink Bounty 3 (Best usage of other Chainlink services), and Graph Bounty 1 (Best New Subgraph). 

<h2 align="left">Slide deck and presentation</h2>

<h2 align="left">Deployed Smart Contract Address</h2>
GhostFactory: 0x0057142698fB40D5BBfa4A1332C05F581D0fF1D2
GhostPolicy: 0x0f150005E5134F0bC328B16bAE541BC11f110D5d

<h2 align="left">Deployed to other platforms</h2>
We've deployed our Subgraph onto Subgraph Studio so that it can be used for queries. 

<h2 align="left">Additional information</h2>
This is not part of any past project that any of us have worked on in the past. We started this project when the hackathon began. 








