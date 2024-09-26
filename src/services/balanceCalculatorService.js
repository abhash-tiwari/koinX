const Trade = require('../models/trade');

const calculateBalance = async (timestamp) => {
    const trades = await Trade.find({ utcTime: { $lte: new Date(timestamp) } });
    
    const balances = {};
    
    for (let trade of trades) {
        if (!balances[trade.baseCoin]) {
            balances[trade.baseCoin] = 0;
        }
        
        if (trade.operation === 'buy') {
            balances[trade.baseCoin] += trade.amount;
        } else if (trade.operation === 'sell') {
            balances[trade.baseCoin] -= trade.amount;
        }
    }
    
    for (let coin in balances) {
        if (balances[coin] === 0) {
            delete balances[coin];
        }
    }
    
    return balances;
};

module.exports = { calculateBalance };