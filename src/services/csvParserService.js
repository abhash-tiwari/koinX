const csv = require('csv-parser');
const fs = require('fs');
const Trade = require('../models/trade');

const parseCsvAndStore = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                try {
                    for (let row of results) {
                        const [baseCoin, quoteCoin] = row.Market.split('/');
                        const trade = new Trade({
                            utcTime: new Date(row.UTC_Time),
                            operation: row.Operation,
                            baseCoin: baseCoin,
                            quoteCoin: quoteCoin,
                            amount: parseFloat(row['Buy/Sell Amount']),
                            price: parseFloat(row.Price)
                        });
                        await trade.save();
                    }
                    resolve('CSV file processed and data stored in database');
                } catch (error) {
                    reject('Error processing CSV file');
                }
            });
    });
};

module.exports = { parseCsvAndStore };