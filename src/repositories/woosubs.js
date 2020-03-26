const subsModel = require('./models/subs');
const skusModel = require('./models/skus');

const getSubItems = async () => {
    return await subsModel.findOne({
        deleted: false
    }).exec();
}

const getSkuItems = async () => {
    return await skusModel.findOne({
        deleted: false
    }).exec();
}

module.exports = {
    getSubItems,
    getSkuItems
}