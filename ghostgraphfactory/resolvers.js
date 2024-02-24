const contract = new web3.eth.Contract(contractABI, contractAddress);

const resolvers = {
    Query: {
        protocolHealth: async () => {
            try {
                const healthScore = await contract.methods.getHealth().call();
                return { healthScore, status: 'Healthy' }; 
            } catch (error) {
                console.error('Error fetching protocol health:', error);
                throw new Error('Failed to fetch protocol health');
            }
        },
    },
};

module.exports = resolvers;